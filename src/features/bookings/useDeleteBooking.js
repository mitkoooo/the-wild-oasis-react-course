import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationKey: ["bookings"],
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      toast.success(`The booking has been successfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () =>
      toast.error("There has been an error with deleting the booking"),
  });

  return { deleteBooking, isDeletingBooking };
}
