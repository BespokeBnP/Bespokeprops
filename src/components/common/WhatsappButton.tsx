"use client";
import {MessageCircle} from "lucide-react";
export default function WhatsappButton(){const phone="27662067983";const msg="Hi, I'm interested in your backdrops!";return <a href=`https://wa.me/${phone}?text=${encodeURIComponent(msg)}` target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 hover:scale-110 transition-all"><MessageCircle className="h-8 w-8"/></a>}
