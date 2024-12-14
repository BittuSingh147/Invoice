import prisma from "@/app/utils/db";
import { requireUser } from "@/app/utils/hooks";
import { emailClient } from "@/app/utils/mailtrap";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ invoiceId: string }>;
  }
) {
  try {
    const session = await requireUser();

    const { invoiceId } = await params;

    const invoiceData = await prisma.invoice.findUnique({
      where: {
        id: invoiceId,
        userId: session.user?.id,
      },
    });

    if (!invoiceData) {
      return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    }

    const sender = {
      email: "hello@demomailtrap.com",
      name: "Bittu Singh",
    };

    emailClient.send({
      from: sender,
      to: [{ email: "19bcs1715@gmail.com" }],
      template_uuid: "08250b61-8080-4112-8b27-571c5c53c9fc",
      template_variables: {
        first_name: invoiceData.clientName,
        company_info_name: "InvoiceSpace",
        company_info_address: "Phase 3",
        company_info_city: "Gurgaon",
        company_info_zip_code: "122010",
        company_info_country: "India",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send Email reminder" },
      { status: 500 }
    );
  }
}
