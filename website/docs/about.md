---
title: What is Bento for?
sidebar_label: About
hide_title: false
---


Bento is a declarative data streaming service that solves a wide range of data engineering problems with simple, chained, stateless [processing steps][docs.processors]. It implements transaction based resiliency with back pressure, so when connecting to at-least-once sources and sinks it's able to guarantee at-least-once delivery without needing to persist messages during transit.
