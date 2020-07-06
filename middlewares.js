import routes from "./src/routers/routes";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "YOUTEBE";
	res.locals.routes = routes;
	next();
};
