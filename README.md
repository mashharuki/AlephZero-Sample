# AlephZero-Sample

This is a repo for AlephZero-Sample

[![Build and Test SmartContract on GitHub Actions](https://github.com/mashharuki/Ginco-One-Platform-Sample/actions/workflows/ci.yml/badge.svg)](https://github.com/mashharuki/Ginco-One-Platform-Sample/actions/workflows/ci.yml)

## How to work

- ### **setUp**

  1. You need to create `.env` file & fillout these values

      ```txt
      PRIVATE_KEY=""
      ```

  2.  install

      ```bash
      yarn
      ```

- ### **commands**

  - **compile**

    ```bash
    yarn compile
    ```

  - **test**

    ```bash
    yarn test
    ```

  - **deploy contract**

    ```bash
    yarn deploy:Lock --network holesky
    ```

  - **get chain info**

    ```bash
    yarn getChainInfo --network holesky
    ```

  - **get balance**

    ```bash
    yarn getBalance --network holesky
    ```

  - **callReadMethod**

    ```bash
    yarn callReadMethod --network holesky
    ```

  - **calWriteMethod**

    ```bash
    yarn callWriteMethod --network holesky
    ```

