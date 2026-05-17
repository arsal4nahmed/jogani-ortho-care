import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917066602602?text=Hello%20Dr.%20Jogani%2C%20I%27d%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elegant transition-transform hover:scale-110"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
