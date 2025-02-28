export interface CollapsiblesProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
}