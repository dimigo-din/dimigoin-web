import { type ToastId, useToast as useChakraToast } from "@chakra-ui/react";
import { Toast } from "../components/Toast";

export type ToastAction = ({
  id,
  content,
  leadingArea,
  preventDuplicate,
}: {
  id?: ToastId;
  content: string;
  leadingArea?: React.ReactNode;
  preventDuplicate?: boolean;
}) => void;

export function useToast(): ToastAction {
  const chakraToast = useChakraToast();

  return ({ id, content = "레이블", leadingArea, preventDuplicate = true }) => {
    if (id && preventDuplicate) {
      if (chakraToast.isActive(id)) {
        return;
      }
    }
    chakraToast({
      id,
      position: "bottom",
      duration: 2 * 1000,
      render: () => <Toast content={content} leadingArea={leadingArea} />,
    });
  };
}
