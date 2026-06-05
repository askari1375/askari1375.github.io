---
layout: page
title: ALL Diagnosis Pipeline
description: Multiple-instance learning pipeline for acute lymphoblastic leukemia diagnosis from blood smear images.
img: assets/img/publication_preview/all-diagnosis-pipeline.png
importance: 4
category: research
related_publications: true
---

My master's thesis focused on diagnosing acute lymphoblastic leukemia from blood smear images under limited-data constraints.

The main concern was not only classification accuracy. With small medical datasets, models can learn shortcuts that look good on a benchmark but do not reflect the clinical structure of the problem. I designed a pipeline inspired by the diagnostic process of hematologists and reframed the task as multiple-instance learning, where a decision should be based on a set of related cell observations rather than one isolated image.

The work explored object detection, segmentation, CNNs, LSTMs, vision transformers, self-supervised learning, and interpretability-oriented evaluation. The resulting arXiv paper reports strong performance on ALL-IDB1 and evaluates generalization under a more challenging out-of-distribution setting {% cite askari2023novel %}.
