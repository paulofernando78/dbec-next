export interface CollapsibleProps {
  title: string;
  label: string
  children: React.ReactNode;
  isOpen?: boolean;
  onChange?: (isOpen: boolean) => void;
}