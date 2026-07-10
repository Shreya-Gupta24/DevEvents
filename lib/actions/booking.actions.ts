'use server';

import Booking from '@/database/booking.model';
import connectDB from "@/lib/mongodb";
import { Types } from 'mongoose'; // 💡 Import Types

export const createBooking = async ({ eventId, slug, email }: { eventId: string; slug: string; email: string; }) => {
    try {
        await connectDB();

        // 💡 Save the result to verify it
        const newBooking = await Booking.create({ 
            eventId: new Types.ObjectId(eventId), 
            email 
        });

        console.log("✅ BOOKING SUCCESSFULLY CREATED:", newBooking);

        return { success: true };
    } catch (e) {
        console.error('❌ SERVER ACTION ACTUAL ERROR:', e); 
        return { success: false };
    }
}