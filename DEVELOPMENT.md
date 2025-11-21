# DEVELOPMENT GUIDE - Before Any Release

> **⚠️ CRITICAL:** This document outlines what MUST be verified before publishing to npm or PyPI.
> No releases until ALL checks pass.

## 📋 Pre-Release Verification Checklist

### 1. Verify Qwen3-Coder API (YOU MUST DO THIS)

```bash
# Step 1: Get your actual API key from https://dashscope.console.aliyun.com/

# Step 2: Test the /auth endpoint
curl -X POST https://dashscope.aliyuncs.com/api/v1/auth/token \
  -H "Content-Type: application/json" \
  -d '{"api_key": "YOUR_REAL_API_KEY"}'

# ❓ VERIFY these fields exist in response:
# - access_token (string)
# - token_type (should be "Bearer")
# - expires_in (number - seconds)

# Step 3: Test actual model endpoint with token
curl -X POST https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen-max",
    "messages": [{"role": "user", "content": "test"}]
  }'

# ❓ VERIFY:
# - Correct endpoint URL
# - Correct model name (qwen-max? qwen-3-coder? qwen-plus?)
# - Response format matches our interfaces
```

### 2. Local Build & Test

```bash
# Clone the repo
git clone https://github.com/onthefox/qwen-tools.git
cd qwen-tools

# Install dependencies
pnpm install

# Build all packages
pnpm run build

# ❌ IF ERRORS: Fix them BEFORE proceeding
# ✅ IF SUCCESS: Continue

# Run tests
pnpm run test

# Check types
pnpm run typecheck

# Lint code
pnpm run lint
```

### 3. Verify Core Client Works

```bash
# Create test file: examples/verify-api.ts
cat > examples/verify-api.ts << 'EOF'
import { Qwen3CoderClient } from './packages/core/src/client';

const client = new Qwen3CoderClient({
  apiKey: process.env.QWEN_API_KEY!,
});

// TEST 1: Check authentication
try {
  const token = await client['authenticate']();
  console.log('✅ Authentication works');
} catch (e) {
  console.error('❌ Authentication failed:', e);
  process.exit(1);
}

// TEST 2: Try analyzing code
try {
  const result = await client.analyzeCode({
    code: 'const x = 1;',
    language: 'typescript',
    task: 'Find any issues',
  });
  console.log('✅ Code analysis works:', result);
} catch (e) {
  console.error('❌ Code analysis failed:', e);
  // This might fail if endpoint doesn't match - that's OK, we learn from it
  console.log('⚠️ This tells us the actual API structure');
}
EOF

# Run verification
QWEN_API_KEY="your-real-key" pnpm run dev examples/verify-api.ts
```

### 4. Document Findings

After running the verification:

**If successful:**
- ✅ Update packages/core/src/client.ts with VERIFIED endpoint URLs
- ✅ Update packages/core/src/client.ts with VERIFIED model names  
- ✅ Update README.md with working instructions

**If failed:**
- 📝 Document the actual API response
- 📝 Update interfaces to match reality
- 📝 Fix endpoint paths
- 📝 Retest until it works

## 🔑 Key Files That MUST Match Reality

```
packages/core/src/client.ts
  ├─ Line 38: API endpoint URL
  ├─ Line 39: Auth endpoint path
  ├─ Interface AuthResponse (lines 13-18): Must match actual response
  └─ Bearer token usage (line 103): Must be correct auth method
```

## 🚫 DO NOT PUBLISH UNTIL

- [ ] Qwen API endpoints verified
- [ ] Auth token retrieval tested
- [ ] Local build succeeds
- [ ] All tests pass
- [ ] README has ONLY working commands
- [ ] Core client tested with real API
- [ ] No "404 endpoint not found" errors
- [ ] Model names confirmed (qwen-max? qwen-3-coder?)

## 📦 Publishing Checklist (After All Verification)

```bash
# Only after all above passes:
pnpm run build              # ✅ Must succeed
pnpm run test               # ✅ All tests pass

# Then publish to npm:
cd packages/core
npm publish --access public
```

## 🎯 The Golden Rule

**"Make it work. Make it right. Make it fast."**

We're at **"Make it work"** stage. Don't move to npm until it actually works.
