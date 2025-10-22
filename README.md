# 🚀 Next Store

A minimal e‑commerce dashboard built with Next.js for managing products (CRUD) using a file‑based JSON store. Ideal as a starter template for learning Next.js App Router and building small admin dashboards.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](#license) [![Next.js](https://img.shields.io/badge/next.js-13+-black)](#) [![Bootstrap](https://img.shields.io/badge/bootstrap-5-blue)](#)

## Quick overview

- Product CRUD (create, read, update, delete)
- API routes under `src/app/api/products`
- UI built with Bootstrap + React‑Bootstrap
- Simple file DB: `src/lib/db/data.json`
- Toast notifications (React Toastify)

## Tech stack

- Next.js (App Router)
- React
- React‑Bootstrap / Bootstrap
- React Toastify
- Lucide icons

## Getting started

1. Clone and install

   ```bash
   git clone https://github.com/RiyadOsama/next-store.git
   cd next-store
   npm install
   ```

2. Run dev server

   ```bash
   npm run dev
   # open http://localhost:3000
   ```

3. Ensure data file exists
   - Path: `src/lib/db/data.json`
   - Example initial content:
     ```json
     []
     ```
     If missing, create the file with `[]`. The server code will also create parent folders when writing.

## Project structure (key files)

```
src/
├─ app/
│  ├─ api/products/        # API routes (GET, POST, PUT, PATCH, DELETE)
│  ├─ products/            # Pages: list, add, [productId]
│  └─ layout.js            # Root layout (imports bootstrap css, header)
├─ components/
│  ├─ atoms/
│  ├─ molecules/
│  └─ organisms/
└─ lib/
   └─ db/
      ├─ data.js           # getData / setData helpers
      └─ data.json         # simple JSON datastore
```

## API endpoints

- GET /api/products — list all products
- POST /api/products — create product
- GET /api/products/{id} — get product by id
- PUT /api/products/{id} — replace product
- PATCH /api/products/{id} — update product fields
- DELETE /api/products/{id} — delete product

Test an endpoint:

```bash
curl http://localhost:3000/api/products
```

## Common troubleshooting

- 500 / file read errors: ensure `src/lib/db/data.json` exists and contains valid JSON.
- Permissions: ensure Node process can read/write project files.
- Restart dev server after changing server files.

## Accessibility & UX notes

- Header uses responsive Navbar (React-Bootstrap).
- 404 page uses semantic markup and a clear CTA back to home.
- Toggle/collapse use aria attributes for screen readers.

## Development tips

- Use the browser DevTools network tab to inspect API requests.
- Add console logs or server logs (Node console) inside API routes to debug server-side issues.
- Keep `data.json` small — this approach is for demos and local development only.

## Contributing

1. Fork → branch → commit → PR.
2. Keep changes scoped and add tests where appropriate.

## License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
