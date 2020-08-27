## 環境構築

1. プロジェクトの作成

   ```bash
   $ npx create-react-app storyshots-sample
   ```

2. モジュールのインストール

   ```bash
   $ cd storyshots-sample
   $ npx -p @storybook/cli sb init
   $ npm install --save-dev @storybook/addon-storyshots react-test-renderer
   $ npm install --save @material-ui/core
   $ npm install --save styled-components
   ```

3. Storyshotsの設定

   ```js
   // src/storybook.test.js
   
   import initStoryshots from '@storybook/addon-storyshots';
   
   initStoryshots({
     storyNameRegex: /^((?!.*?Excluedsnapshot).)*$/
   });
   
   ```



## サンプルコード

- MaterialUI
  - [コンポーネント](./src/MaterialButton.js)
  - [Storybook](./src/stories/MaterialButton.stories.js)
- Styled Component
  - [コンポーネント](src/StyledButton.js)
  - [Storybook](./src/stories/StyledButton.stories.js)



## 実行方法

#### Storybook

```bash
$ npm run storybook
```



#### Storyshots

```bash
$ npm test
```



**変更内容が意図したものである場合**

変更内容が意図した内容である場合でもテストが失敗するので、その場合はsnapshotを更新する。

以下のような表示がされたときに、`u`を押してsnapshotを更新する。

```bash
 FAIL  src/storybook.test.js (5.672s)
  ● Storyshots › MaterialButton › Button

    expect(received).toMatchSnapshot()

    Snapshot name: `Storyshots MaterialButton Button 1`

    - Snapshot
    + Received

    @@ -17,9 +17,9 @@
          type="button"
        >
          <span
            className="MuiButton-label"
          >
    -       Button
    +       Button changed
          </span>
        </button>
      </div>

      at match (node_modules/@storybook/addon-storyshots/dist/test-bodies.js:16:30)
      at node_modules/@storybook/addon-storyshots/dist/test-bodies.js:25:16
      at Object.<anonymous> (node_modules/@storybook/addon-storyshots/dist/api/snapshotsTestsTemplate.js:42:20)

 › 1 snapshot failed.
Snapshot Summary
 › 1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.

Test Suites: 1 failed, 1 passed, 2 total
Tests:       1 failed, 2 passed, 3 total
Snapshots:   1 failed, 1 passed, 2 total
Time:        7.154s
Ran all test suites.

Watch Usage: Press w to show more.
```







## トラブルシューティング

- Storybook作成時にエラーが出た場合

  - エラーの内容

    ```bash
    $ npm run storybook
    ・・・
    ERROR in ./node_modules/@material-ui/core/esm/Button/Button.js
    Module not found: Error: Can't resolve 'react
    ```

  - 対処方法

    モジュールを再インストールする

    ```bash
    $ rm -rf node_modules
    $ rm package-lock.json 
    $ npm install
    ```

    その後、`npm run storybook`を再実行する



## 参考ページ

- [Storybookチュートリアル](https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/)

