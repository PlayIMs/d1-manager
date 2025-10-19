export type PluginData = {
	db: {
		name: string;
		columns: [
			{
				cid: number;
				name: string;
				type: "INTEGER" | "TEXT" | "REAL" | "BLOB";
				notnull: number;
				dflt_value: string | null;
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
	}[];
};
