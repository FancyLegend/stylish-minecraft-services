import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, MessagesSquare, Send } from "lucide-react";

interface PurchaseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  price: number;
}

export function PurchaseDialog({ open, onOpenChange, title, price }: PurchaseDialogProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Купить {title}</DialogTitle>
          <DialogDescription>
            Стоимость: {formatPrice(price)}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <p className="text-muted-foreground">
            Выберите удобный способ связи для совершения покупки:
          </p>
          <div className="flex flex-col gap-3">
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2" />
                Telegram
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="https://vk.com/yourusername" target="_blank" rel="noopener noreferrer">
                <MessagesSquare className="mr-2" />
                VKontakte
              </a>
            </Button>
            <Button variant="outline" className="w-full justify-start" asChild>
              <a href="https://discord.gg/yourinvite" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Discord
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}