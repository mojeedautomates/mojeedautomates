import whatsappCover from "../assets/workflows/whatsapp_ai_waiter_workflow.svg";
import leadgenCover from "../assets/workflows/lead_generation_followup_workflow.svg";
import instantCover from "../assets/workflows/instant_response_branching_workflow.svg";
import onboardingCover from "../assets/workflows/client_onboarding_workflow.svg";
import invoiceCover from "../assets/workflows/invoice_collection_workflow.svg";
import grantCover from "../assets/workflows/grant_qualification_workflow.svg";
import menuCostCover from "../assets/workflows/menu_cost_planner_workflow.svg";
import supportAgentCover from "../assets/workflows/multi_channel_support_workflow.svg";

import bmlInvoice from "../assets/projects/bml_invoice.png.asset.json";
import bmlInvoice1 from "../assets/projects/bml_invoice_1.png.asset.json";
import bmlInvoice2 from "../assets/projects/bml_invoice_2.png.asset.json";
import estimate1 from "../assets/projects/estimate.png.asset.json";
import estimate2 from "../assets/projects/estimate_2.png.asset.json";
import estimate3 from "../assets/projects/estimate_3.png.asset.json";
import estimate4 from "../assets/projects/estimate_4.png.asset.json";
import estimate5 from "../assets/projects/estimate_5.png.asset.json";
import logicOn from "../assets/projects/logic_on.png.asset.json";
import logicOn1 from "../assets/projects/logic_on1.png.asset.json";
import logicOn2 from "../assets/projects/logic_on2.png.asset.json";
import logicOn5 from "../assets/projects/logic_on5.png.asset.json";
import logicOn6 from "../assets/projects/logic_on6.png.asset.json";
import order from "../assets/projects/Order.png.asset.json";
import order1 from "../assets/projects/Order_1.png.asset.json";
import order2 from "../assets/projects/Order_2.png.asset.json";
import order3 from "../assets/projects/Order_3.png.asset.json";
import order4 from "../assets/projects/Order_4.png.asset.json";
import order5 from "../assets/projects/Order_5.png.asset.json";
import lead from "../assets/projects/Lead.png.asset.json";
import lead1 from "../assets/projects/Lead_1.png.asset.json";
import lead2 from "../assets/projects/Lead_2.png.asset.json";
import bmlGrant from "../assets/projects/BML_Grant.png.asset.json";
import bmlGrant1 from "../assets/projects/BML_Grant_1.png.asset.json";
import bmlGrant2 from "../assets/projects/BML_Grant_2.png.asset.json";
import bmlGrant3 from "../assets/projects/BML_Grant_3.png.asset.json";
import bmlGrant4 from "../assets/projects/BML_Grant_4.png.asset.json";
import bmlGrant5 from "../assets/projects/BML_Grant_5.png.asset.json";
import bmlGrant9 from "../assets/projects/BML_Grant_9.png.asset.json";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  problem: string;
  process: string[];
  result: string;
  impact: string;
  cover: string;
  coverColor: string;
  video?: string;
  screenshots?: { url: string; caption?: string }[];
};

const projectCatalog: Project[] = [
  {
    id: "multi-channel-support-agent",
    title: "Multi Channel AI Customer Support Agent",
    description:
      "A customer support system that handles enquiries across WhatsApp, website chat, and email through one shared workflow. It uses the business knowledge base and conversation history to provide useful responses, keeps customer records organized, and passes complex or unresolved cases to a person when needed.",
    tags: ["n8n", "OpenAI", "Supabase", "PostgreSQL", "Vector Store", "Airtable", "WhatsApp", "Website Chat", "Gmail", "Webhooks", "n8n Forms", "Google Apps Script"],
    problem:
      "Businesses receive enquiries across several channels, which makes it harder to deliver consistent support and keep conversation records up to date. Customers may need to repeat information when they switch channels, while staff spend time answering recurring questions. Chatbots can also lose conversation history, answer without enough business information, or continue replying after a person takes over. Without clear handoff tracking, unresolved cases can be missed.",
    process: [
      "Messages from WhatsApp, website chat, and email are routed through one n8n workflow so each channel follows the same support process.",
      "Airtable stores customer details and conversation records. Each customer has a unique Customer ID, which links their messages and helps the team follow previous interactions.",
      "The support agent checks the business knowledge base for relevant product, service, and policy information before responding.",
      "PostgreSQL stores conversation history under each customer’s Airtable Customer ID, allowing the support agent to recognize returning customers across all three channels without mixing their records.",
      "Replies are sent back through the same channel as the customer’s message, in the appropriate format.",
      "When a case needs staff attention, the system prepares a conversation summary, updates its status in Airtable, and emails a representative instead of sending another automated reply.",
      "Automated replies stop while a person handles an escalated case. Staff responses are added to the conversation history so automated support can resume with the latest context.",
      "Staff can update case progress through a dedicated form without opening Airtable. The system also sends a reminder when an escalation remains unattended.",
      "A separate workflow reports system errors so the team can respond to problems that interrupt customer support.",
    ],
    result:
      "The business gets one support system for three communication channels, backed by shared customer records and conversation history. Replies draw on the business knowledge base and previous interactions, while staff receive complex cases with their context intact. The team can track conversations, update case statuses, and follow unattended cases in one place.",
    impact:
      "The system reduces repetitive support work and gives the business a clearer view of customer enquiries. Shared conversation history helps customers avoid repeating information, and clear handoffs ensure that people can step in when needed. Staff can handle more enquiries without monitoring each channel separately.",
    cover: supportAgentCover,
    coverColor: "#8B5CF6",
    video: "/videos/multi_channel_support_walkthrough.mp4",
    screenshots: [
      { url: "/assets/projects/support_agent_1.png", caption: "Multi Channel AI Support Agent full workflow canvas" },
      { url: "/assets/projects/support_agent_3.png", caption: "Internal escalation reminder workflow" },
      { url: "/assets/projects/support_agent_4.png", caption: "Knowledge Base Ingestion workflow" },
      { url: "/assets/projects/support_agent_5.png", caption: "Escalation Status Update workflow" },
      { url: "/assets/projects/support_agent_6.png", caption: "Central error monitoring and notifications workflow" },
      { url: "/assets/projects/support_agent_7.png", caption: "Website chat widget answering a customer enquiry" },
      { url: "/assets/projects/support_agent_8.png", caption: "Human escalation email with full customer context" },
      { url: "/assets/projects/support_agent_9.png", caption: "Customer records across all channels" },
      { url: "/assets/projects/support_agent_10.png", caption: "Customer conversations across all channels" },
      { url: "/assets/projects/support_agent_11.png", caption: "Customer support knowledge base documents" },
      { url: "/assets/projects/support_agent_12.png", caption: "AI agent conversation memory" },
    ],
  },
  {
    id: "whatsapp-ordering-agent",
    title: "WhatsApp Ordering AI Agent",
    description:
      "A WhatsApp assistant for a restaurant that handles orders from menu questions through kitchen notifications, with no manual staff handoff for routine orders.",
    tags: ["n8n", "WhatsApp", "Google Gemini", "Supabase", "Google Sheets", "Telegram"],
    problem:
      "Restaurants weren't losing customers over food quality, they were losing them in chats staff couldn't keep up with. The same questions got answered over and over, and every order had to be manually taken and tracked, pulling staff away from the floor and slowing down service during busy hours.",
    process: [
      "A customer messages on WhatsApp and the AI responds immediately, answering questions using a fixed knowledge base and handling the conversation like a human waiter would.",
      "The assistant takes the order, asks for the customer's name and phone number, and confirms pickup or delivery. It collects an address only for deliveries.",
      "Each finalized order gets a unique ID and is logged into Google Sheets with the customer's details.",
      "A 3-minute edit window opens after the order is finalized, during which the customer can request changes and the AI updates the order accordingly.",
      "Once the window closes, no further changes are accepted, and the kitchen is automatically notified on Telegram with the finalized order.",
    ],
    result:
      "Customers can place orders without waiting for staff, and each confirmed order reaches the kitchen in a clear format. Requests about items outside the menu are handled without guessing.",
    impact:
      "The restaurant can handle more orders without adding staff. Customers receive consistent service throughout the day, and the kitchen gets complete orders instead of having to chase down details during a rush.",
    cover: whatsappCover,
    coverColor: "#3B82F6",
    screenshots: [
      { url: order.url, caption: "Restaurant Chat Assistant workflow" },
      { url: order1.url, caption: "Kitchen Timer workflow" },
      { url: order3.url, caption: "Order Editable workflow" },
      { url: order5.url, caption: "Restaurant Orders sheet" },
      { url: order4.url, caption: "WhatsApp order confirmation" },
      { url: order2.url, caption: "Kitchen Telegram notification" },
    ],
  },
  {
    id: "lead-generation-engine",
    title: "Lead Generation & Outreach Engine",
    description:
      "An outbound pipeline that finds suitable prospects, prepares personalized outreach, and schedules follow up emails. Follow ups stop when a prospect replies.",
    tags: ["n8n", "Google Sheets", "Apify", "Firecrawl", "OpenAI", "Gmail"],
    problem:
      "Finding prospects, checking their contact details, and drafting outreach emails by hand took time and limited the number of businesses the team could contact. Follow up tracking was inconsistent, which sometimes meant a prospect received another email after already replying.",
    process: [
      "Web scraping engines extract lead data from targeted websites based on search parameters.",
      "An AI agent analyzes each lead's site to identify specific technical and operational gaps.",
      "A personalized pitch is generated based on those gaps, and the initial outreach email is sent.",
      "If a prospect has not replied, the system sends up to four follow up emails after 3, 7, 14, and 28 days.",
      "Before each follow up, the system checks for a reply. If the prospect has responded, it stops sending emails and notifies the team to continue the conversation.",
    ],
    result:
      "Prospect information is organized into contact records, and each prospect receives a tailored outreach email. The scheduled follow up sequence stops as soon as a real conversation begins.",
    impact:
      "The team avoids missed follow ups and does not send scheduled emails after a prospect replies. The process also returns about 15 hours each week previously spent reviewing websites, writing emails, and tracking outreach.",
    cover: leadgenCover,
    coverColor: "#9333EA",
    screenshots: [
      { url: lead.url, caption: "Lead generation and outreach workflow" },
      { url: lead1.url, caption: "Follow-up scheduler workflow" },
      { url: lead2.url, caption: "Automation Lead sheet" },
    ],
  },
  {
    id: "restaurant-menu-cost-planner",
    title: "Restaurant Menu & Cost Planner",
    description:
      "An Airtable base for a Nigerian restaurant to manage recipes, track changing market prices, and calculate daily meal preparation costs.",
    tags: ["Airtable"],
    problem:
      "Changing local market prices made it difficult to know the exact cost of each dish. Calculating costs in spreadsheets led to budgeting mistakes, and planning purchases for the daily market trip took time.",
    process: [
      "I set up a main ingredient list to track the current market price for every single item.",
      "I built detailed recipes and linked them directly to those specific ingredients.",
      "I added a daily planner to schedule exactly what the kitchen needs to cook each day.",
      "When the price of an ingredient changes in the main list, the system automatically does the math and updates the total cost of any dish that uses it.",
      "A custom calculator instantly adds up the total grocery expenses for the planned menu.",
    ],
    result:
      "When the restaurant plans its menu, the base provides an up to date cost breakdown. Kitchen staff can see the daily cooking schedule, and managers can estimate market expenses without calculating each dish by hand.",
    impact:
      "The updated cost calculations give managers a clearer basis for budgeting and reduce time spent checking figures by hand. The team can focus more on running the restaurant and less on spreadsheet calculations.",
    cover: menuCostCover,
    coverColor: "#7B5EA7",
    screenshots: [
      { url: "/assets/projects/restaurant_ingredients.jpg", caption: "Current ingredient prices and suppliers" },
      { url: "/assets/projects/restaurant_recipes.jpg", caption: "Recipes linked to ingredients and costs" },
      { url: "/assets/projects/restaurant_meal_planner.jpg", caption: "Daily meal planning schedule" },
      { url: "/assets/projects/restaurant_ingredient_gallery.jpg", caption: "Visual ingredient gallery" },
      { url: "/assets/projects/restaurant_difficulty.jpg", caption: "Recipes grouped by difficulty" },
      { url: "/assets/projects/restaurant_market_calculator.jpg", caption: "Market run cost calculator" },
      { url: "/assets/projects/restaurant_categories.jpg", caption: "Ingredients grouped by category" },
      { url: "/assets/projects/restaurant_recipe_instructions.jpg", caption: "Recipes with cooking instructions" },
    ],
  },
  {
    id: "instant-lead-capture",
    title: "Instant Lead Capture & Response",
    description:
      "A custom built website and automated backend for a construction, roofing, and plumbing company. Designed to score, quote and respond to estimate requests in under 60 seconds while general contact form submissions get an instant acknowledgment.",
    tags: ["n8n", "Google Sheets", "Google Drive", "Gmail", "Slack"],
    problem:
      "Estimate requests and general enquiries were arriving through the site with no consistent response window. Motivated buyers ready to book would move on to a competitor before the team saw the message, and general enquiries often sat unanswered long enough that people assumed the form hadn't submitted.",
    process: [
      "A form submission on the website triggers the workflow instantly. Estimate requests and general contact messages are handled on separate tracks.",
      "Estimate requests are scored, logged to a spreadsheet, and sent as a branded quote email within 60 seconds.",
      "For general contact form submissions: an instant acknowledgment email is sent confirming the message was received.",
      "The crew is alerted in the team's messaging app with the relevant lead details.",
    ],
    result:
      "Every visitor who fills out a form on the site whether requesting a quote or just reaching out gets an immediate response. Estimate requests get a full branded quote in under 60 seconds, and general enquiries get instant confirmation that their message landed, with zero manual work on the company's end.",
    impact:
      "No visitor is left wondering if their form actually submitted. Motivated buyers get locked in before competitors even see the enquiry, and the crew stays focused on fieldwork instead of chasing down or reassuring leads manually.",
    cover: instantCover,
    coverColor: "#C026D3",
    screenshots: [
      { url: estimate1.url, caption: "n8n workflow — Estimate & Follow Up" },
      { url: estimate2.url, caption: "Website estimate request form" },
      { url: estimate4.url, caption: "Lead capture sheet" },
      { url: estimate5.url, caption: "Branded quote email to the customer" },
      { url: estimate3.url, caption: "Instant crew alert with lead details" },
    ],
  },
  {
    id: "client-onboarding",
    title: "Client Onboarding & Fulfillment",
    description:
      "An automated onboarding pipeline that takes a new client from form submission to a fully provisioned project setup, CRM profile, project board, shared drive, welcome email, and internal notification, all without manual setup work.",
    tags: ["n8n", "Airtable", "Asana", "Google Drive", "Gmail", "Slack"],
    problem:
      "Onboarding a new client involved a long list of manual, repetitive setup tasks: creating CRM records, checking for duplicate client profiles, setting up a new project board from scratch, creating folder structures, assigning the right manager, and sending a welcome email. Each step took time, was easy to get wrong or skip, and pulled staff away from actual client work every time a new deal closed.",
    process: [
      "A new submission is checked against existing client records to avoid duplicates, and a project profile is created with the right manager assigned automatically.",
      "A project board is created in Asana from a master template, with tasks, deadlines, and assignees already set.",
      "A folder structure is created and shared with the client in Google Drive.",
      "The client gets a personalized welcome email, and the internal team is notified in Slack.",
      "Errors are flagged automatically if anything fails.",
    ],
    result:
      "A single form submission now sets up everything a new client needs, a CRM profile, a project board, a folder structure, and a welcome email in minutes instead of hours, with no manual data entry and no missed steps.",
    impact:
      "Every new client gets the same consistent, professional onboarding experience regardless of who's on staff that day. The setup work that used to take a team member an hour or more across multiple tools now happens automatically, freeing them to focus on the client relationship instead of admin work.",
    cover: onboardingCover,
    coverColor: "#4338CA",
    screenshots: [
      { url: logicOn6.url, caption: "n8n workflow — Logic Layer Onboarding" },
      { url: logicOn1.url, caption: "Airtable client & project board" },
      { url: logicOn2.url, caption: "Client onboarding intake form" },
      { url: logicOn.url, caption: "Internal Slack notification" },
      { url: logicOn5.url, caption: "Asana project board created from template" },
    ],
  },
  {
    id: "invoice-collection",
    title: "Invoice Collection Pipeline",
    description:
      "An accounts receivable workflow that tracks invoice status, identifies overdue accounts, and sends tailored reminder emails at set intervals.",
    tags: ["n8n", "Google Sheets", "Google Gemini", "Gmail"],
    problem:
      "Organizations lose predictable cash flow and waste critical resources manually tracking overdue invoices. Traditional billing systems rely on static, easily ignored reminders that fail to address client specific nuances. Without continuous oversight and structured escalation intervals, overdue balances compound, tracking gaps widen, and collections stall, directly harming operational liquidity.",
    process: [
      "Payment status is monitored continuously through a polling trigger.",
      "Days overdue are calculated and grouped into set intervals: 7, 14, 21, or 28 days.",
      "An AI agent processes the invoice details and drafts a tailored escalation email matching the current tier.",
      "The drafted email is sent through Gmail.",
      "The database is updated to prevent duplicate tracking or repeat sends.",
    ],
    result:
      "An end to end automated collection framework that eliminates manual tracking entirely. The pipeline tracks payment status, isolates overdue accounts, and uses AI to generate and send custom, escalating email sequences that protect client relationships while accelerating payment.",
    impact:
      "Reminders go out as soon as an account reaches an overdue threshold instead of waiting for someone to check manually. This returns about 10 hours each week to the finance team.",
    cover: invoiceCover,
    coverColor: "#2563EB",
    screenshots: [
      { url: bmlInvoice.url, caption: "n8n workflow — BML Invoice Collection System" },
      { url: bmlInvoice2.url, caption: "Invoice tracking sheet" },
      { url: bmlInvoice1.url, caption: "Personalized invoice reminder email" },
    ],
  },
  {
    id: "grant-qualification",
    title: "Grant Discovery & Qualification System",
    description:
      "An AI system that discovers funding opportunities, matches them to a hospital profile, and generates application drafts.",
    tags: ["n8n", "Google Sheets", "Google Gemini", "Google Calendar", "Google Docs", "Google Drive"],
    problem:
      "Hospitals and healthcare facilities miss out on critical funding opportunities because manually auditing massive databases of grant requirements against complex institutional profiles is incredibly time consuming. This intensive review process makes it nearly impossible to identify and apply for perfectly aligned grants before application deadlines.",
    process: [
      "New grant opportunities are automatically ingested as they become available.",
      "Each grant is cross-referenced against a detailed hospital criteria profile.",
      "The data is routed to an AI agent for a detailed analysis of the grant's requirements.",
      "The AI agent evaluates compatibility and outputs a qualification score against a set compliance threshold.",
    ],
    result:
      "The system filters out low scoring opportunities and adds grants that meet the hospital's criteria to a shared tracker. This reduces time spent reviewing grants and helps staff prioritize suitable funding opportunities.",
    impact:
      "Suitable grants are identified and flagged more consistently than they would be through manual research alone. Draft applications are prepared sooner, giving healthcare staff more time for clinical work.",
    cover: grantCover,
    coverColor: "#A855F7",
    screenshots: [
      { url: bmlGrant.url, caption: "n8n workflow — Grant Scout + Match" },
      { url: bmlGrant5.url, caption: "The Drafter workflow" },
      { url: bmlGrant9.url, caption: "Scheduler + Reminder workflow" },
      { url: bmlGrant3.url, caption: "Grant Details sheet" },
      { url: bmlGrant1.url, caption: "Hospital profile sheet" },
      { url: bmlGrant4.url, caption: "Grant and hospital match tracker" },
      { url: bmlGrant2.url, caption: "AI-drafted proposal notification" },
    ],
  },
];

const requestedProjectOrder = [
  "multi-channel-support-agent",
  "client-onboarding",
  "lead-generation-engine",
  "restaurant-menu-cost-planner",
  "whatsapp-ordering-agent",
];
const requestedProjectPositions = new Map(
  requestedProjectOrder.map((projectId, index) => [projectId, index]),
);

export const projects: Project[] = [...projectCatalog].sort((a, b) => {
  const aPosition = requestedProjectPositions.get(a.id);
  const bPosition = requestedProjectPositions.get(b.id);
  if (aPosition === undefined) return bPosition === undefined ? 0 : 1;
  if (bPosition === undefined) return -1;
  return aPosition - bPosition;
});
