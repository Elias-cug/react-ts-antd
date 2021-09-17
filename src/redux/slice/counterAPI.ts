// A mock function to mimic making an async request for data

interface Result {
  data: number;
}

export function fetchCount (amount = 1): Promise<Result> {
  return new Promise(resolve => setTimeout(() => resolve({ data: amount }), 500));
}
