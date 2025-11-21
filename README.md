<div align="center">
  <img src="https://raw.githubusercontent.com/onthefox/qwen-tools/main/assets/logo.svg" alt="Qwen Tools Logo" width="120" height="120" />
  <h1>qwen-tools</h1>
  <p><strong>Advanced TypeScript Monorepo for Qwen3-Coder Agentic Workflows</strong></p>
  <p>
    <a href="#features">Features</a> •
    <a href="#quick-start">Quick Start</a> •
    <a href="#architecture">Architecture</a> •
    <a href="#documentation">Documentation</a> •
    <a href="#contributing">Contributing</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js" alt="Node.js" />
    <img src="https://img.shields.io/badge/License-Apache%202.0-orange" alt="License" />
    <img src="https://img.shields.io/badge/pnpm-8%2B-red?logo=pnpm" alt="pnpm" />
  </p>
</div>

---

## 🚀 Overview

**qwen-tools** is a production-grade TypeScript monorepo that adapts the ast-grep/claude-skill architecture for Qwen3-Coder integration. It enables sophisticated agentic workflows with **256K+ context support**, multi-step code analysis, generation, and refactoring capabilities.

Powered by:
- 🧠 **Qwen3-Coder API** - Latest Alibaba LLM with 256K context window
- 🔍 **AST-grep** - Pattern-based code search and analysis
- ⚙️ **Agentic Workflows** - Multi-step reasoning with function calling
- 📦 **pnpm Monorepo** - Optimized workspace management
- 🛡️ **TypeScript** - Full type safety and strict mode

---

## ✨ Features

### Core Capabilities
- ✅ **Code Analysis** - Deep AST-based pattern matching and code comprehension
- ✅ **Generation** - Intelligent code generation from natural language
- ✅ **Refactoring** - Automated code transformations with Qwen3-Coder
- ✅ **256K+ Context** - Handle large codebases with extended context
- ✅ **CLI Tool** - Production-ready command-line interface
- ✅ **Function Calling** - Structured agentic task orchestration
- ✅ **Pattern Library** - Reusable AST-grep skill patterns

### Development Experience
- 🎯 **Strict TypeScript** - Zero `any` types, full type safety
- 🧪 **Vitest** - Fast unit testing with coverage reporting
- 📝 **ESLint + Prettier** - Automated code quality
- 🔗 **pnpm Workspaces** - Monorepo package management
- 🚀 **Zero Configuration** - Ready-to-use build system

---

## 📦 Packages

### `@qwen-tools/cli`
Command-line interface for interacting with Qwen3-Coder agentic workflows.
```bash
npm install -g @qwen-tools/cli
qwen-tools analyze ./src
qwen-tools generate "Create a React component for..."
```

### `@qwen-tools/core`
Core library providing Qwen3-Coder integration, AST-grep patterns, and agentic orchestration.
```typescript
import { QwenCodeClient } from '@qwen-tools/core';

const client = new QwenCodeClient({ apiKey: process.env.QWEN_API_KEY });
const analysis = await client.analyzeCode(sourceCode, patterns);
```

### `@qwen-tools/skills`
Reusable AST-grep pattern library adapted for Qwen3-Coder workflows.
```typescript
import { patterns } from '@qwen-tools/skills';

const results = await astGrep.search(code, patterns.findUnusedVariables);
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher
- **Qwen API Key** (get one at [api.qwen.ai](https://api.qwen.ai))

### Installation

```bash
# Clone the repository
git clone https://github.com/onthefox/qwen-tools.git
cd qwen-tools

# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test
```

### Environment Setup

```bash
# Create .env file
echo "QWEN_API_KEY=your_api_key_here" > .env
echo "QWEN_MODEL=qwen-code-2.5-2b" >> .env
```

### First Command

```bash
# Development mode
pnpm run dev

# CLI usage
pnpm --filter @qwen-tools/cli run dev -- analyze ./examples/sample.ts
```

---

## 🏗️ Architecture

### Monorepo Structure

```
qwen-tools/
├── packages/
│   ├── cli/           # @qwen-tools/cli - CLI interface
│   ├── core/          # @qwen-tools/core - Core integration
│   └── skills/        # @qwen-tools/skills - Pattern library
├── pnpm-workspace.yaml
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

### Data Flow

```
User Input
    ↓
CLI Parser (@qwen-tools/cli)
    ↓
Core Engine (@qwen-tools/core)
    ├→ Pattern Matching (AST-grep + Skills)
    ├→ Qwen3-Coder API Call
    └→ Function Calling Orchestration
    ↓
Output Formatting
    ↓
User Result
```

### Technology Stack

| Layer | Technology |
|-------|------------|
| **Language** | TypeScript 5.3+ |
| **Runtime** | Node.js 18+ |
| **Package Manager** | pnpm 8+ |
| **Testing** | Vitest + Coverage |
| **Linting** | ESLint + TypeScript |
| **Formatting** | Prettier |
| **LLM** | Qwen3-Coder |
| **Code Analysis** | AST-grep |

---

## 📖 Documentation

### Usage Examples

#### Code Analysis
```typescript
import { QwenCodeClient } from '@qwen-tools/core';

const client = new QwenCodeClient();
const result = await client.analyze({
  code: sourceCode,
  task: 'Find security vulnerabilities',
  context: 'React component'
});
```

#### Code Generation
```typescript
const generated = await client.generate({
  description: 'Create a TypeScript utility for array flattening',
  language: 'typescript',
  includeTests: true
});
```

#### Refactoring
```typescript
const refactored = await client.refactor({
  code: sourceCode,
  objective: 'Improve performance and readability',
  targetStyle: 'functional'
});
```

### API Reference

See [docs/API.md](./docs/API.md) for complete API documentation.

### CLI Commands

See [docs/CLI.md](./docs/CLI.md) for detailed CLI reference.

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) first.

### Development

```bash
# Install with dev dependencies
pnpm install

# Run in watch mode
pnpm run dev

# Run tests
pnpm run test

# Check code quality
pnpm run lint
pnpm run typecheck

# Build for production
pnpm run build
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat(cli): add new command
fix(core): resolve pattern matching bug
docs: update README
test(skills): add pattern tests
refactor: improve error handling
```

---

## 📄 License

This project is licensed under the **Apache License 2.0** - see [LICENSE](./LICENSE) file for details.

Aligned with the Qwen3-Coder open-source ecosystem.

---

## 🙏 Acknowledgments

- [ast-grep](https://ast-grep.github.io/) - Pattern-based code search
- [claude-skill](https://github.com/claude-ai/claude-skill) - Original skill architecture
- [Qwen3-Coder](https://www.alibabacloud.com/product/qwenai) - LLM engine
- [pnpm](https://pnpm.io/) - Package manager

---

## 📞 Support

- 📚 [Documentation](./docs)
- 🐛 [Issues](https://github.com/onthefox/qwen-tools/issues)
- 💬 [Discussions](https://github.com/onthefox/qwen-tools/discussions)
- 📧 Email: [your-email@example.com]

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/onthefox">@onthefox</a></p>
  <p><a href="https://github.com/onthefox/qwen-tools">⭐ Star on GitHub</a> · <a href="https://github.com/onthefox/qwen-tools/fork">🍴 Fork</a> · <a href="https://github.com/onthefox/qwen-tools/discussions">💬 Discuss</a></p>
</div>
