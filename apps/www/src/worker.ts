import { handle } from "@astrojs/cloudflare/handler";
import { canonicalRedirectUrl } from "./lib/canonical-url";

// Run before the asset handler: prerendered pages bypass Astro middleware.
export default {
	fetch(request, env, ctx) {
		const canonicalUrl = canonicalRedirectUrl(new URL(request.url));
		if (canonicalUrl) {
			return Response.redirect(canonicalUrl.toString(), 308);
		}
		return handle(request, env, ctx);
	},
} satisfies ExportedHandler<Parameters<typeof handle>[1]>;
