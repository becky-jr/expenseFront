export type TransactionType = "income" | "expense";

export type TransactionCategory = "food" | "utilities" | "income" | "transport";


export interface Transaction {
	id: number;
	title: string;
	amount: number;
	type: TransactionType;
	category: TransactionCategory;
	date: string;
}

export interface CategoryBreakdown {
	category: string;
	percentage: number;
	color: string;
}


export interface TransactionData {
	item: string;
	price: string;
	category: TransactionCategory;
}
