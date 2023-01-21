const express = require('express');
const bodyParser = require('body-parser');
const db = require('./queries');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('/benchmarks')
	.get(db.getAllBenchmarks)
	.post(db.createBenchmark);

app.route('/benchmarks/mb_type/:type')
	.get(db.getBenchmarksByType);

app.route('/benchmarks/id/:id')
	.put(db.updateBenchmarkById)
	.delete(db.deleteBenchmarkById)
	.get(db.getBenchmarkById);

app.listen(port, () => {
	console.log(`App running on port ${port}.`)
});
