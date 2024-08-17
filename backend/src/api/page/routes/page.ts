import { factories } from "@strapi/strapi";

/**
 * page router.
 */

export default factories.createCoreRouter('api::page.page', {
  config: {
    find: {
      middlewares: ["api::page.page-populate-middleware"]
    },
    findOne: {
      middlewares: ["api::page.page-populate-middleware"]
    },
  }
});
