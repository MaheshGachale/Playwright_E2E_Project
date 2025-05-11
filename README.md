# Playwright E2E Project

Industry-level End-to-End (E2E) automation project using [Playwright](https://playwright.dev/).

## Project Structure

```
.
├── tests/
│   ├── POM/
│   │   ├── E2E_Page.js
│   │   └── E2E_Page.spec.js
│   └── Practice_Folder/
│       ├── E2E_Test_Without_POM.spec.js
│       └── Practice_UI_Elements.spec.js
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

```bash
npm install
npx playwright install
```

### Running Tests

- Run all tests (headless):
  ```bash
  npm test
  ```
- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```
- View HTML report:
  ```bash
  npm run test:report
  ```

## Best Practices

- Uses Page Object Model (POM) for maintainability.
- Organized test folders.
- All test artifacts and dependencies are gitignored.
- Consistent code style and naming.
- Example tests for UI elements and E2E flows.

## Contributing

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

MIT

---

Mahesh Gachale
