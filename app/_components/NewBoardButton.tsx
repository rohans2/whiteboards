"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const NewBoardButton = ({
  orgId,
  disabled,
}: {
  orgId: string;
  disabled?: boolean;
}) => {
  const { mutate, pending } = useApiMutation(api.board.create);
  const router = useRouter();
  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board Created");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board"));
  };
  return (
    <button
      disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) &&
          "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-xs text-white font-light">New Board</p>
    </button>
  );
};
