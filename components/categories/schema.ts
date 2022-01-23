import { CategoryColor, CategoryIcon } from "types/Category";
import { z } from "zod";

export const CreateCategoryFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  color: z
    .enum([
      CategoryColor.Green,
      CategoryColor.Red,
      CategoryColor.Blue,
      CategoryColor.Purple,
      CategoryColor.Orange,
    ])
    .optional()
    .refine((value: string | undefined) => value, {
      message: "Required",
    }),
  icon: z
    .enum([
      CategoryIcon.Bill,
      CategoryIcon.Food,
      CategoryIcon.Home,
      CategoryIcon.Medicine,
      CategoryIcon.Transport,
    ])
    .optional()
    .refine((value: string | undefined) => value, {
      message: "Required",
    }),
});

export type CreateCategoryFormSchemaType = z.infer<
  typeof CreateCategoryFormSchema
>;
