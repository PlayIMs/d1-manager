import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch, params }) => {
	const db = await fetch(`/api/db/${params.database}`).then((r) =>
		r.json<
			{
				name: string;
				columns: [
					{
						cid: number;
						name: string;
						type: "INTEGER" | "TEXT" | "REAL" | "BLOB";
						notnull: number;
						dflt_value: null | string;
						pk: number;
					},
				];
				count: number;
				foreign_keys: {
					id: number;
					seq: number;
					table: string;
					from: string;
					to: string;
					on_update: string;
					on_delete: string;
					match: string;
				}[];
			}[]
		>(),
	);
	return { db };
};
