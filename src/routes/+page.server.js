import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const content = await import('../lib/content/youtube.md');
		
		return {
			content: content.default.render().html
		}
	} catch(err) {
		throw error(404, err)
	}
}
