import { Star, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  discount?: number;
  isPopular?: boolean;
  className?: string;
}

export function ServiceCard({ 
  title, 
  description, 
  price, 
  discount, 
  isPopular,
  className 
}: ServiceCardProps) {
  const finalPrice = discount ? price - (price * discount / 100) : price;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className={cn(
      "relative bg-secondary p-6 rounded-lg card-hover",
      className
    )}>
      {isPopular && (
        <div className="absolute -top-2 -right-2 bg-primary px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4" />
          <span className="text-sm font-medium">Популярно</span>
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex items-end gap-2">
        {discount ? (
          <>
            <span className="text-2xl font-bold">{formatPrice(finalPrice)}</span>
            <span className="text-muted-foreground line-through">{formatPrice(price)}</span>
            <div className="ml-auto flex items-center text-primary">
              <Diamond className="w-4 h-4 mr-1" />
              <span>-{discount}%</span>
            </div>
          </>
        ) : (
          <span className="text-2xl font-bold">{formatPrice(price)}</span>
        )}
      </div>
    </div>
  );
}