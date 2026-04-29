---
layout: page
title: QGraph
permalink: /qgraph/
description: A personal AI engineering project for structured text analysis.
nav: false
---

QGraph is a personal AI engineering project where I explore how modern AI systems can support deep analysis of structured text. The initial domain is Quranic studies, but the broader goal is to build a production-grade, domain-specific text-analysis platform combining search, segmentation, retrieval, and AI-assisted reasoning.

I approached QGraph as a full system rather than a small prototype. It is a controlled environment for designing an AI-driven product end to end: backend architecture, frontend UX, authentication, deployment, and integration with a modular AI service.

## System Structure

QGraph is organized around three components:

- **Django backend:** canonical data layer, API contracts, authentication, segmentation models, search orchestration, and persistence.
- **Next.js frontend:** user-facing application for reading, segmentation exploration, search workflows, authentication, and account management.
- **AI backend:** planned FastAPI service for retrieval, RAG, and knowledge-graph-based reasoning.

The backend and frontend are close to initial deployment. The AI service is designed but intentionally not fully implemented yet, so the current system is best described as a production-oriented AI system foundation rather than a fully launched AI product.

## Backend Design

The Django/DRF backend is designed as an orchestration and persistence layer rather than a thin API wrapper. It is organized into domain apps for accounts, canonical text data, segmentation, and search.

Key design choices include:

- Versioned analytical data using snapshot-based segmentation versions instead of mutable in-place edits.
- Explicit provenance for AI-produced outputs, including model identity, parameters, timestamps, and workflow metadata.
- Database constraints and transactional logic for invariants such as one active segmentation version per workspace and surah.
- Sync and async search execution paths with query, execution, response, block, and ranked-item persistence.
- Adapter boundaries for future external AI service integration.

## Security And Production Awareness

The project includes a deliberate production-readiness layer:

- Email-based custom user model.
- Djoser and SimpleJWT authentication.
- HTTP-only JWT cookies, CSRF enforcement, token rotation, and refresh-token blacklisting.
- Google OAuth account linking based on verified email.
- Owner-scoped resources, public/private segmentation boundaries, and guest search tokens.
- Environment-specific settings, Docker and Compose workflows, Gunicorn, Nginx, systemd assets, Sentry integration, request-ID logging, and deployment documentation.

## Frontend And Product Layer

The Next.js frontend focuses on making backend and future AI capabilities usable:

- Server-first route design with route-level loading, error, and not-found handling.
- Typed API client with CSRF handling, JWT refresh/retry logic, and normalized errors.
- Search UX for submission, polling, structured result rendering, partial states, failure states, and empty states.
- Domain-specific UX work including bilingual English/Persian considerations, RTL support, typography, and segmentation visualization.
- Tests with Vitest, Playwright, and MSW-based API mocking.

## Takeaways

QGraph demonstrates my current backend and AI-systems engineering direction: clean domain boundaries, versioned data models, async workflows, observable AI execution, authentication and security design, deployment awareness, and user-facing product thinking.
