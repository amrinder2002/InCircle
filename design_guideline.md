# DESIGN\_GUIDELINES.md

## 📅 Project Context: Private Real Estate Marketplace App

A mobile-first, privacy-aware real estate communication platform built to streamline listing sharing and property requests among professional real estate agents, brokers, channel partners, and builders. This document outlines **general UI/UX guidelines**, industry-standard practices, and adaptable design principles that apply to similar applications in the domain.

---

## 🎯 Purpose of This Document

To define platform-agnostic design rules and user interface expectations for apps built with:

* Trust-first, contact-based user interactions
* Mobile-first listing and request exchanges
* Minimal yet efficient communication tools

> This document avoids personal or subjective preferences and instead promotes best practices that align with professional and user-friendly mobile UX for apps with similar functionality.

---

## 🌐 Global UI Principles

### 1. Layout & Spacing

* Use a responsive 12-column grid system for consistency
* Base spacing on 4px units: recommend 8/16/24/32px spacing between sections
* Ensure alignment and padding respects standard mobile safe zones
* Optimize for touch interfaces (minimum 48px tap targets)

### 2. Color Usage

* Prefer dark or neutral backgrounds with strong contrast
* Use one primary accent color (commonly green/blue) to indicate actions
* Status color scheme:

  * Green: Active
  * Amber/Yellow: In Progress or Pending
  * Red: Sold or Inactive

### 3. Typography

* Use modern sans-serif fonts: Roboto, Inter, or SF Pro
* Title hierarchy: Headings 20–24px, Subheadings 16–18px, Body 14–16px
* Maintain sufficient line height (1.3–1.5) for legibility

### 4. Iconography & Language

* Keep icon language familiar (use standard icon sets like Material Design)
* Favor clean, stroke-based icons
* Use intuitive labels for any actions (e.g., Share, Export, Chat)

---

## 📱 Common Page Structures

### Home Page

* **Token bar:** Horizontal scrolling section with ephemeral property needs (story/status style)
* **Listings feed:** Scrollable cards with photos, brief details, and action buttons
* **Floating Action Button (FAB):** For adding listings or tokens

### Post Listing Page

* Form with inputs: property type, price, location, area, images, description
* Status dropdown (e.g., Active, Under Negotiation, Sold)
* Upload section for images with preview
* Submit button: fixed or floating bottom placement

### Raise Token Page

* Textarea for requirement input
* Option to auto-expire after set time (e.g., 24 hrs)
* Token preview available before posting

### Listing Detail View

* Full images carousel
* Detailed property specs and description
* Action bar: Call, Chat, Share, Export PDF

### Token Detail View

* Full view of request text
* Option to respond with matching listings

### Dashboard Page

* Quick stats overview (Active/Sold listings, Active/Fulfilled tokens)
* List of owned assets (listings/tokens) with edit/delete/status features

### Chat Page

* Conversation list: ordered by recent activity
* Message interface with listing/token sharing

### Profile & Settings Page

* Profile card: Name, mobile
* Invite contact feature (link, SMS, etc.)
* Sync contacts button
* Privacy policy, logout, terms

---

## 🔄 Shared UI Elements

### Top App Bar

* Use consistent height and spacing
* Left-aligned logo or text brand
* Right-aligned icons (optional search or notifications)

### Bottom Navigation

* Fixed across views (Home, Listings, Chat, Profile)
* Icons + labels
* Highlight active state with primary color

### Reusable Components

* Listing Card
* Token Card
* Avatar + user row
* Action buttons: consistent design across screens

### Status Badges

* Color-coded, rounded pill shapes
* Use visual hierarchy to reduce cognitive load

---

## 🧠 Accessibility & Performance Guidelines

* High contrast text/background combinations
* Minimum 48x48px tap targets for all buttons
* Support screen reader labeling
* Lazy loading for listings and image-heavy views
* Minimize DOM depth and keep animations performant

---

## 🔍 AI-Driven Design Instructions

The implementation of visuals and components may vary, but must:

* Preserve information hierarchy and accessibility
* Ensure all required actions are available in each screen context
* Respect principles of spatial efficiency, content clarity, and intuitive behavior
* Use modals, drawers, tabs, and carousels where best suited
* Incorporate transitions, animations, and gestures as per mobile UI norms

> This document does **not limit** creativity — AI tools may implement alternate interaction flows, navigation strategies, or layout innovations **so long as they align with the app’s goals and user expectations**.

---

## 🔗 General Application Map

1. **Home** — Tokens (top), Feed of Listings (below), FAB
2. **Post Listing** — Add new property listing
3. **Raise Token** — Add new property request
4. **Listing Detail** — Full property view
5. **Token Detail** — Full request view + reply
6. **Dashboard** — Your listings and tokens overview
7. **Chat** — Direct communication with contacts
8. **Profile** — Personal settings and invite
9. **Settings (optional)** — Notification, sync, terms

---

## ✅ Summary

This document offers **flexible, scalable, and generalizable** guidelines that apply to most **contact-based, listing-oriented marketplace apps**. It defines what’s essential — layout patterns, components, accessibility, and performance — while allowing AI tools the freedom to creatively adapt those systems to real-world, mobile-centric user behaviors.

All implementations must:

* Respect usability, readability, responsiveness
* Prioritize trusted, peer-level interactions
* Be mobile-first, but scalable

> This is a foundation, not a constraint — structure your app meaningfully, and let interaction patterns evolve with your user needs.
