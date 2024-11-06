import { columns } from "@/components/appointmentTable/DataColumns";
import { AppointmentTable } from "@/components/appointmentTable/DataTable";
import { appointments } from "@/lib/doctorData";

export default function Appointments() {
  return (
    <div className="container mx-auto">
      <AppointmentTable columns={columns} data={appointments}/>
    </div>
  );
}
