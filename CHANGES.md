# Changelog



## [3.0.0-alpha.0](https://github.com/patternslib/pat-shopping-cart/compare/2.0.0...3.0.0-alpha.0) (2022-06-15)


### Features


* **Build:** Build module federation enabled bundles. ([fdf16a4](https://github.com/patternslib/pat-shopping-cart/commit/fdf16a4d191e3fa6180e73ef7dd75256550bf649))


### Breaking Changes


* Depend on @patternslib/dev and extend config from there. ([adc614a](https://github.com/patternslib/pat-shopping-cart/commit/adc614ac1b725d283ba86fac03e5546f73a705f3))

* Extend babel config from @patternslib/dev. ([f33e6fd](https://github.com/patternslib/pat-shopping-cart/commit/f33e6fd54c38664a00754ce50425e03c43df5578))

* Extend commitlint config from @patternslib/dev. ([46650d2](https://github.com/patternslib/pat-shopping-cart/commit/46650d26feb99beb5942e938b9ad861010284627))

* Extend eslint config from @patternslib/dev. ([3c4cb9a](https://github.com/patternslib/pat-shopping-cart/commit/3c4cb9aca3b76f3ac7c2d9697c07e11aee04efb6))

* Extend jest config from @patternslib/dev. ([fcdf079](https://github.com/patternslib/pat-shopping-cart/commit/fcdf07936eb9dbf32aa094bbf6bf631545542aad))

* Extend Makefile from @patternslib/dev. ([3847470](https://github.com/patternslib/pat-shopping-cart/commit/3847470af2b74af48aea8ea0953ce39beb0fedb2))

* Extend prettier config from @patternslib/dev. ([4e6c3bb](https://github.com/patternslib/pat-shopping-cart/commit/4e6c3bb44de093856f27a6a3295866e72d4192fc))

* Extend release-it config from @patternslib/dev. ([ffe1ada](https://github.com/patternslib/pat-shopping-cart/commit/ffe1adab398f92a9ea31cbf92b3c50e0fd96d8ec))

* Extend webpack config from @patternslib/dev. ([dd4a0a2](https://github.com/patternslib/pat-shopping-cart/commit/dd4a0a2b90b91b2ab1f4a3fb67813c3f348d6f22))


### Maintenance


* **build:** Add build:dev script to package.json to create a unminified development build. ([deaae50](https://github.com/patternslib/pat-shopping-cart/commit/deaae504701cc3d8385c45450626186a4459c2b3))

* **Build:** @patternslib/patternslib as peerDependency. ([ee61fff](https://github.com/patternslib/pat-shopping-cart/commit/ee61fff57175697ac00f30b672c6c00589a772cf))Move @patternslib/patternslib dependency to peerDependencies and set to any version to avoid version conflicts when this package is a dependency of another Patternslib based package.

* **Build:** Add @patternslib/patternslib also to devDependencies so that we get it installed. ([9d25a41](https://github.com/patternslib/pat-shopping-cart/commit/9d25a41c185ba8a24d2ff0877b4db3b07e5de209))

* **Build:** Add keyword "patternslib" to package.json. ([c1abab6](https://github.com/patternslib/pat-shopping-cart/commit/c1abab6d16a7f66ff46472f1cd32692a32bd60bb))

* **Build:** Explicitly add jquery as a dependency. ([2271120](https://github.com/patternslib/pat-shopping-cart/commit/227112080349e608f1df645534871bf340089180))

* **Build:** Extend jest.config.js from Patternslib and reuse their setupTests file too. ([4df0b70](https://github.com/patternslib/pat-shopping-cart/commit/4df0b701857036d5126727e3473ac4addab6908a))

* **Build:** Keep yarn.lock in repository. ([3435232](https://github.com/patternslib/pat-shopping-cart/commit/343523260dfba45556f429015a8cde4c98da26f0))

* **Build:** Makefile - Allow OTP when publishing to npm, build bundles and publish them on GitHub, add pre-release targets. ([9a8e530](https://github.com/patternslib/pat-shopping-cart/commit/9a8e530999af83e4230d9ba33c03e52fc0b08ff5))

* **Build:** Remove dependency regenerator-runtime except from test setup. The async/await runtime handling is already built-in in current Babel. ([b774693](https://github.com/patternslib/pat-shopping-cart/commit/b7746934b6b7014c3d476d865c5f26f85320ce2b))

* **Build:** Update GitHub actions setup. ([3cad038](https://github.com/patternslib/pat-shopping-cart/commit/3cad038d3f817bea0986fe19f9aad4f253e9f8e0))

* **Build:** Upgrade and cleanup dependencies. ([d4b68f1](https://github.com/patternslib/pat-shopping-cart/commit/d4b68f163c25a5a0c73cf39754a721c0f4bb6854))

* **webpack:** Configure devServer static directory. ([eebb62a](https://github.com/patternslib/pat-shopping-cart/commit/eebb62a347382772907e46ebe150f59b30a8fc14))

## [2.0.0](https://github.com/patternslib/pat-shopping-cart/compare/1.1.0...2.0.0) (2021-11-18)


### Breaking Changes

* Upgrade to Webpack 5. ([0381039](https://github.com/patternslib/pat-shopping-cart/commit/03810398869f343bbcfd45564706c13612644f40))



### Maintenance

* **build:** Extend Patternslib release-it config file. ([ade4792](https://github.com/patternslib/pat-shopping-cart/commit/ade4792d233591bfba2ac190b133d12960d653c3))

* **build:** Release on GitHub releases. ([0f7474d](https://github.com/patternslib/pat-shopping-cart/commit/0f7474df6d05bb75b1bb17efc40aebabf5433e53))

* Upgrade up to minor versions. ([1ab72bf](https://github.com/patternslib/pat-shopping-cart/commit/1ab72bffd0dec4e93669163b59aa3877fdad4bce))

## [1.1.0](https://github.com/patternslib/pat-shopping-cart/compare/1.0.0...1.1.0) (2021-06-15)


### Maintenance

* Test updates after jest upgrade. ([ed9c1df](https://github.com/patternslib/pat-shopping-cart/commit/ed9c1df78db7d64be40b1208e4903a2aa9e7cc2c))
* **dependencies:** Depend on Patternslib v4.4.0. ([4dc5ad7](https://github.com/patternslib/pat-shopping-cart/commit/4dc5ad7d1fc80af9673bb6bdc2be3688dd99ec01))
* **dependencies:** Upgrade dependencies on minor+patch level. ([cd98aa3](https://github.com/patternslib/pat-shopping-cart/commit/cd98aa316b1a1a2587d6e431f2098ead620be4be))
* **make release-patch:** Add missing patch for patch level releases. ([74a6289](https://github.com/patternslib/pat-shopping-cart/commit/74a6289f65af4efc0dbf72aedbb286b8ccbc778f))
* **Release:** Remove the release-web target. Only Patternslib releases are pushed to Patterns-releases on Github. ([4e91f8f](https://github.com/patternslib/pat-shopping-cart/commit/4e91f8fcd41000d27be008588f44b646b7c48d1a))
* **Release process:** Do not include the release commit in the changelog. ([3b50c53](https://github.com/patternslib/pat-shopping-cart/commit/3b50c53a11123f00eeabc495ce96c2049fb209cd))
* **webpack:** Adapt start script to recent dependency changes. ([dd67bc4](https://github.com/patternslib/pat-shopping-cart/commit/dd67bc4496f10a793841d8fd79b778fb9f2845f9))
* **webpack:** Simplify webpack. ([134ab1d](https://github.com/patternslib/pat-shopping-cart/commit/134ab1d7a6759066b30af02430d8951ae6727165))

## 1.0.0 (2021-04-20)


### Maintenance

* Prepare release, move repo to github/patternslib ([7a35d81](https://github.com/patternslib/pat-shopping-cart/commit/7a35d81df0a7f336798399f3d2f2d003b6c6a94c))
* **Tests:** Add basic tests. ([4c34331](https://github.com/patternslib/pat-shopping-cart/commit/4c3433104411823e203da24eb32b4047bb8dfa20))
* Upgrade to Patternslib v4 final - shoppingcart customizations. ([d3c815a](https://github.com/patternslib/pat-shopping-cart/commit/d3c815a298f20e897906790d911f6dc3b7a627d9))
* Upgrade to Patternslib v4 final. ([da4292f](https://github.com/patternslib/pat-shopping-cart/commit/da4292f59c3d946503e29bdb01b458a61c61daad))


## 1.0.0 - unreleased

- Upgrade to ES6.