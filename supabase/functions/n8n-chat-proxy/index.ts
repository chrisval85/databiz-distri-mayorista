import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { conversationId, message } = await req.json();

    console.log("Recibido del cliente:", { conversationId, message });

    // URL del webhook de N8n
    const N8N_WEBHOOK_URL = "https://chvaldezdatabiz.app.n8n.cloud/webhook/113e9bd7-0cfc-44fc-9164-aa8eedfa2a58";

    // Preparar el payload completo según la especificación de N8n
    const payload = {
      messageId: crypto.randomUUID(),
      conversationId: conversationId,
      operatorId: "databiz-web-chat",
      queueId: "web-queue-001",
      sendDate: new Date().toISOString(),
      message: message,
      flow: {
        id: conversationId,
        name: "Chat Web Databiz"
      },
      type: 4,
      typeUrl: null,
      platform: {
        id: "web-platform-001",
        name: "Web Chat"
      },
      channel: {
        id: "web-channel-001",
        name: "Sitio Web Databiz"
      },
      organization: {
        id: "databiz-org-001",
        name: "Databiz Paraguay"
      },
      customer: {
        id: conversationId,
        countryCode: "595",
        msisdn: "000000000",
        platformCustomerId: null,
        displayName: "Cliente Web",
        firstName: "Cliente",
        lastName: "Web",
        picture: "",
        verified: false,
        mail: "",
        note: "Consulta desde el sitio web",
        extraInformations: [],
        icon: "user",
        type: "web",
        contactGroupIds: []
      }
    };

    console.log("Enviando a N8n:", payload);

    // Hacer la petición al webhook de N8n
    const response = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("Error de N8n:", response.status, await response.text());
      throw new Error(`N8n webhook error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Respuesta de N8n:", data);

    return new Response(
      JSON.stringify(data),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );

  } catch (error) {
    console.error("Error en proxy:", error);
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Error desconocido",
        message: "Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta nuevamente."
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
