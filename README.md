# sql-generator-toolkit

## install 

```shell
yarn add sql-generator-toolkit
```


## how to use
```javascript
import { SQLGeneratorToolkit } from 'sql-generator-toolkit';
SQLGeneratorToolkit.createSQLStatements('update users set time=now', 'id', ['1', '2', '3', '4', '5'], 2)

```