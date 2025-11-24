<div align="center">
  <img src="https://raw.githubusercontent.com/onthefox/qwen-tools/main/assets/logo.svg" alt="Qwen Tools Logo" width="120" height="120" />
  <h1>qwen-tools</h1>
  <p><strong>Advanced TypeScript Monorepo for Qwen3-Coder Agentic Workflows</strong></p>
  <p>256K+ context • Multi-step code analysis, generation, refactoring • Production-ready CLI + npm distribution</p>
</div>

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-Apache%202.0-orange)](LICENSE)
[![pnpm](https://img.shields.io/badge/pnpm-8%2B-red?logo=pnpm)](https://pnpm.io/)
[![npm](https://img.shields.io/badge/npm-8%2B-red?logo=npm)](https://www.npmjs.com/)

## 🎯 About

**qwen-tools** is a production-grade **TypeScript monorepo** that adapts the ast-grep/claude-skill architecture for **Qwen3-Coder integration**. It enables sophisticated **agentic workflows** with **256K+ context support**, multi-step code analysis, generation, and refactoring capabilities.

Designed for developers who need:
- 🧠 **Advanced code reasoning** with Qwen3-Coder's latest LLM
- 🔍 **Deep code analysis** using AST-grep pattern matching
- 🚀 **Agentic workflows** with function calling orchestration
- 📄 **Large codebase support** with 256K+ context window
- 📚 **Type-safe development** with strict TypeScript

### Why Qwen-Tools?

| Feature | Traditional Tools | Qwen-Tools |
|---------|-------------------|------------|
| **AI Model** | Limited/GPT only | ✅ Qwen3-Coder (Latest) |
| **Context Window** | 8K-128K | ✅ **256K+** |
| **Code Analysis** | Regex/LSP-based | ✅ AST + AI reasoning |
| **Code Generation** | ❌ Limited | ✅ Full production code |
| **Agentic Workflows** | ❌ None | ✅ Multi-step orchestration |
| **Type Safety** | Partial | ✅ Strict TypeScript |
| **Monorepo Support** | ❌ Limited | ✅ Full pnpm workspaces |
| **Distribution** | npm only | ✅ npm + CLI |

### Powered By

🧠 **Qwen3-Coder** - Alibaba's latest LLM with 256K context  
🔍 **AST-grep** - Pattern-based code search and analysis  
⚙️ **Agentic Workflows** - Multi-step reasoning with function calling  
📂 **pnpm Monorepo** - Optimized workspace management  
🔐 **TypeScript** - Full type safety and strict mode

---

## ✨ Key Features

### Core Capabilities

✅ **Code Analysis** - Deep AST-based pattern matching and AI reasoning  
✅ **Code Generation** - Intelligent code from natural language descriptions  
✅ **Refactoring** - Automated transformations with Qwen3-Coder  
✅ **256K+ Context** - Handle large codebases with extended context window  
✅ **CLI Tool** - Production-ready command-line interface  
✅ **Function Calling** - Structured agentic task orchestration  
✅ **Pattern Library** - Reusable AST-grep skill patterns  
✅ **Multi-Language** - Python, TypeScript, JavaScript, Go, Rust, Java

### Development Experience

🎯 **Strict TypeScript** - Zero `any` types, full type safety  
🧪 **Vitest** - Fast unit testing with coverage reporting  
📓 **ESLint + Prettier** - Automated code quality  
🔗 **pnpm Workspaces** - Monorepo package management  
🚀 **Zero Configuration** - Ready-to-use build system  
📄 **Type Definitions** - Full TypeScript IDE support

---

## 📂 Packages

### `@qwen-tools/cli` - Command Line Interface
Command-line tool for interacting with Qwen3-Coder agentic workflows.
```bash
npm install -g @qwen-tools/cli
qwen-tools analyze ./src
qwen-tools generate "Create a React component for..."
qwen-tools refactor --file app.ts --objective "improve performance"
```

### `@qwen-tools/core` - Core Library
Core TypeScript library with Qwen3-Coder integration, AST-grep patterns, and agentic orchestration.
```typescript
import { QwenCodeClient } from '@qwen-tools/core';

const client = new QwenCodeClient({
  apiKey: process.env.QWEN_API_KEY
});

const analysis = await client.analyze({
  code: sourceCode,
  task: 'Find security vulnerabilities',
  context: 'Express API handler'
});
```

### `@qwen-tools/skills` - Pattern Library
Reusable AST-grep pattern library adapted for Qwen3-Coder workflows.
```typescript
import { patterns } from '@qwen-tools/skills';

const results = await astGrep.search(
  code,
  patterns.findUnusedVariables
);
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.0.0 or higher
- **pnpm** 8.0.0 or higher  
- **Qwen API Key** (get one at [api.qwen.ai](https://api.qwen.ai/))

### Installation

```bash
# Clone repository
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

## 🎯 Architecture

### Monorepo Structure

```
qwen-tools/
├── packages/
│   ├── cli/      # @qwen-tools/cli - CLI interface
│   ├── core/     # @qwen-tools/core - Core integration  
│   └── skills/   # @qwen-tools/skills - Pattern library
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
| **Distribution** | npm + npm CLI |

---

## 📖 Usage Guide

### Code Analysis

```typescript
const result = await client.analyze({
  code: sourceCode,
  task: 'Find security vulnerabilities',
  context: 'React component'
});
```

### Code Generation

```typescript
const generated = await client.generate({
  description: 'Create a TypeScript utility for array flattening',
  language: 'typescript',
  includeTests: true
});
```

### Refactoring

```typescript
const refactored = await client.refactor({
  code: sourceCode,
  objective: 'Improve performance and readability',
  targetStyle: 'functional'
});
```

### CLI Commands

```bash
# Analyze code
qwen-tools analyze src/ --focus security

# Generate code
qwen-tools generate "Create REST API endpoint" --language typescript

# Refactor code
qwen-tools refactor app.ts --objective "modernize code"

# Export results
qwen-tools analyze src/ --output analysis.json --format json
```

---

## 🤝 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

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

Apache License 2.0 - see [LICENSE](LICENSE) file for details.

Aligned with the Qwen3-Coder open-source ecosystem.

---

## 🙋 Acknowledgments

- [ast-grep](https://ast-grep.github.io/) - Pattern-based code search
- [claude-skill](https://github.com/ast-grep/claude-skill) - Original skill architecture
- [Qwen3-Coder](https://www.alibabacloud.com/product/qwenai) - LLM engine
- [pnpm](https://pnpm.io/) - Package manager

---

## 📞 Support

- 📖 [Documentation](./docs)
- 🐛 [Issues](https://github.com/onthefox/qwen-tools/issues)
- 💬 [Discussions](https://github.com/onthefox/qwen-tools/discussions)
- 📕 [Development Guide](./DEVELOPMENT.md)

---

## 🌟 Show Your Support

- ⭐ **Star** the repository
- 🔗 **Fork** and contribute
- 💬 **Discuss** ideas and improvements
- 🐛 **Report** issues and bugs
- 🤝 **Contribute** code and documentation

**Made with ❤️ by [@onthefox](https://github.com/onthefox)**

[⭐ Star on GitHub](https://github.com/onthefox/qwen-tools) · [🔗 Fork](https://github.com/onthefox/qwen-tools/fork) · [💬 Discuss](https://github.com/onthefox/qwen-tools/discussions)
