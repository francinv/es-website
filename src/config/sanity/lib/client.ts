import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "sktN4VvnUczg1CkJ6VMUVQ5jXB9nOBBq26sprXgsOREXz5uA7X1ngFYZUFsaCD7snRiUWmn9hE7QzJQHiuPTaX4VDz8jfZnlFrQKqv9jzLhyS8O9uPx06dWeEeisTn9zdhun2sDCCiXK0aYTp4DF6e7MlRKKU0NsI47sys6ctUu2sJJcMOBt",
});
