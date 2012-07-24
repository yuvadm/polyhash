Polyhash
========

Polyhash is an aesthetic and helpful way to visualize hash values. Remembering hashed fingerprints is very hard, and having a quick way to visually grasp hased values is of great importance.

Requirements
------------

  1. **Distinct** - relatively similar values must be easily distinguishable
  2. **Aesthetic** - output must be visually appealing
  3. **Flexible** - input of arbitrary size must be accepted

Implementation
--------------

Any arbitrary array of characters is accepted as an input. Input is hashed by the SHA1 hash algorithm, producing a 160-bit hashed value, which will then be processed by the output visualization method, which is a work in progresss.

