import routes from "./routers/routes";

export const localsMiddleware = (req, res, next) => {
	res.locals.siteName = "YOUTUBE";
	res.locals.routes = routes;
	next();
};
