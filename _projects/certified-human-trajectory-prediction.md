---
layout: page
title: Certified Human Trajectory Prediction
description: CVPR 2025 work on certified robustness for trajectory prediction under noisy and adversarial inputs.
img: assets/img/publication_preview/certified-human-trajectory-prediction.png
importance: 2
category: research
related_publications: true
---

This project asks a reliability question for human trajectory prediction: when observations are noisy or imperfect, can a model give guaranteed bounds on its future predictions?

The work adapts randomized smoothing to trajectory forecasting, where outputs are multi-modal and do not have a natural fixed range. It also uses a diffusion-based trajectory denoiser to reduce the performance drop that certification can introduce.

My contributions included implementing and evaluating certification components, integrating the denoiser, and helping design certified metrics such as Certified-ADE, Certified-FDE, Certified Collision Rate, ABD, and FBD.

The work was accepted to CVPR 2025 {% cite bahari2025certified %}. See the [project website](https://s-attack.github.io/certified/) and the [publication](/publications/) for details.
