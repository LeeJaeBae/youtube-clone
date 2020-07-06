import express from "express";
import morgan from "morgan";
import helmet from "helmet";

const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on http://localhost:${PORT}`);

app.use(morgan("dev")); // logging
app.use(helmet());

app.get("/", (req, res) => {
	res.send("home");
});
app.listen(PORT, handleListening);
