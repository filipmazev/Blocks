# @filip.mazev/modal

A robust, programmatic, and highly customizable **Angular modal system** designed for enterprise-grade applications. It offers a unified API for centered dialogs, side-panels (drawers), and mobile-first swipeable bottom sheets, all while maintaining strict type safety, modular architecture, and accessible design patterns.

Unlike traditional template-driven modal libraries that require placing component selectors in your HTML, this library utilizes a **service-based approach**. This decouples your business logic from your view layer, allowing you to trigger complex UI flows from Services, Route Guards, or Global Error Handlers without polluting the DOM with dormant markup.

---

## 🚀 Key Features

* **Programmatic Control:** Instantly open and manage modals from any class. This Service-First architecture simplifies state management and dynamic component injection.
* **Intelligent Adaptive Layout:** Automatically detects device type. On desktop, modals render as dialogs or drawers; on mobile, they morph into native-feeling, physics-based swipeable bottom sheets.
* **Functional Design Tokens:** A comprehensive theming system based on CSS variables for instant runtime theme switching (e.g., Dark Mode) and easy white-labeling.
* **Strongly Typed Generics:** Full support for TypeScript Generics allows you to define exactly what data goes in and what result comes out, eliminating `any` casting.
* **Extensible Base Architecture:** All modal components extend a `GenericModal` abstract class, providing consistent lifecycle hooks (`afterModalGet`, `onDestroy`).
* **Smart Scroll Handling:** Optimized layout logic ensures sticky footers and headers remain visible while the main content area remains independently scrollable.

---

## 🛠 Installation

Install the package via npm:

```bash
npm install @filip.mazev/modal