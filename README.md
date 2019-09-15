# axios_vue_sample


## application/x-www-form-urulencoded形式を指定してPost送信

```javascript
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```
