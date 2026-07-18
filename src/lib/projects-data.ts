import whatsappCover from "../assets/workflows/whatsapp_ai_waiter_workflow.svg";
import leadgenCover from "../assets/workflows/lead_generation_followup_workflow.svg";
import instantCover from "../assets/workflows/instant_response_branching_workflow.svg";
import onboardingCover from "../assets/workflows/client_onboarding_workflow.svg";
import invoiceCover from "../assets/workflows/invoice_collection_workflow.svg";
import grantCover from "../assets/workflows/grant_qualification_workflow.svg";

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
  screenshots?: { url: string; caption?: string }[];
};

export const projects: Project[] = [
  {
    id: "whatsapp-ordering-agent",
    title: "WhatsApp Ordering AI Agent",
    description:
      "An AI powered WhatsApp waiter for a restaurant that handles the entire ordering process end to end — from answering menu questions to notifying the kitchen — with no staff involvement.",
    tags: ["n8n", "WhatsApp", "Google Gemini", "Supabase", "Google Sheets", "Telegram"],
    problem:
      "Restaurants weren't losing customers over food quality — they were losing them in chats staff couldn't keep up with. The same questions got answered over and over, and every order had to be manually taken and tracked, pulling staff away from the floor and slowing down service during busy hours.",
    process: [
      "A customer messages on WhatsApp and the AI responds immediately, answering questions using a fixed knowledge base and handling the conversation like a human waiter would.",
      "The AI takes the order, asks for the customer's name and phone number, and confirms pickup or delivery — collecting the address only if delivery is chosen.",
      "Each finalized order gets a unique ID and is logged into Google Sheets with the customer's details.",
      "A 3-minute edit window opens after the order is finalized, during which the customer can request changes and the AI updates the order accordingly.",
      "Once the window closes, no further changes are accepted, and the kitchen is automatically notified on Telegram with the finalized order.",
    ],
    result:
      "Every customer gets a fast, natural ordering experience without waiting on staff, every order lands in the kitchen structured and accurate, and requests for anything outside the menu are handled professionally instead of guessed at.",
    impact:
      "The restaurant can handle more orders at once without adding staff. Customers get a consistent, human-like experience any time of day, and the kitchen receives clean, ready-to-execute orders instead of chasing down details mid-rush.",
    cover: whatsappCover,
  },
  {
    id: "lead-generation-engine",
    title: "Lead Generation & Outreach Engine",
    description:
      "An automated outbound pipeline that identifies high-value prospects, generates personalized cold outreach, and manages a structured follow-up sequence. It automatically stops the moment a lead replies.",
    tags: ["n8n", "Google Sheets", "Apify", "Firecrawl", "OpenAI", "Gmail"],
    problem:
      "Manually identifying prospects, verifying contact details, and drafting individual outreach emails was slow and limited outbound volume. Tracking who had been followed up with, and when, was inconsistent. This caused warm leads to go cold from missed timing, and sometimes led to active conversations getting an automated follow-up after the lead had already replied.",
    process: [
      "Web scraping engines extract lead data from targeted websites based on search parameters.",
      "An AI agent analyzes each lead's site to identify specific technical and operational gaps.",
      "A personalized pitch is generated based on those gaps, and the initial outreach email is sent.",
      "If a lead hasn't replied, up to 4 follow-ups are sent at 3, 7, 14, and 28 day intervals.",
      "The system checks for a reply before each follow-up. Stops follow-ups if the lead has responded, and notifies the internal team to continue the conversation.",
    ],
    result:
      "Raw prospect data is automatically turned into structured, ready-to-contact records, with a personalized outreach pitch generated and sent for every lead. A structured follow-up sequence runs after that, and hands off to a human as soon as a real conversation starts.",
    impact:
      "No lead goes cold from missed timing, and no lead gets a follow-up after they have already replied. About 15 hours a week are returned to the team — previously spent manually auditing sites, writing individual emails, and tracking who needed a follow-up.",
    cover: leadgenCover,
  },
  {
    id: "instant-lead-capture",
    title: "Instant Lead Capture & Response",
    description:
      "A custom-built website and automated backend for a construction, roofing, and plumbing company. Designed to score, quote and respond to estimate requests in under 60 seconds — while general contact form submissions get an instant acknowledgment.",
    tags: ["n8n", "Google Sheets", "Google Drive", "Gmail", "Slack"],
    problem:
      "Estimate requests and general enquiries were arriving through the site with no consistent response window. Motivated buyers ready to book would move on to a competitor before the team saw the message, and general enquiries often sat unanswered long enough that people assumed the form hadn't submitted.",
    process: [
      "A form submission on the website triggers the workflow instantly. Estimate requests and general contact messages are handled on separate tracks.",
      "For estimate requests: the lead is automatically scored, logged to a spreadsheet, and sent a branded quote email — all within 60 seconds.",
      "For general contact form submissions: an instant acknowledgment email is sent confirming the message was received.",
      "The crew is alerted in the team's messaging app with the relevant lead details.",
    ],
    result:
      "Every visitor who fills out a form on the site — whether requesting a quote or just reaching out — gets an immediate response. Estimate requests get a full branded quote in under 60 seconds, and general enquiries get instant confirmation that their message landed, with zero manual work on the company's end.",
    impact:
      "No visitor is left wondering if their form actually submitted. Motivated buyers get locked in before competitors even see the enquiry, and the crew stays focused on fieldwork instead of chasing down or reassuring leads manually.",
    cover: instantCover,
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
      "An automated onboarding pipeline that takes a new client from form submission to a fully provisioned project setup — CRM profile, project board, shared drive, welcome email, and internal notification, all without manual setup work.",
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
      "A single form submission now sets up everything a new client needs — a CRM profile, a project board, a folder structure, and a welcome email — in minutes instead of hours, with no manual data entry and no missed steps.",
    impact:
      "Every new client gets the same consistent, professional onboarding experience regardless of who's on staff that day. The setup work that used to take a team member an hour or more across multiple tools now happens automatically, freeing them to focus on the client relationship instead of admin work.",
    cover: onboardingCover,
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
      "A continuous accounts receivable pipeline that monitors invoice statuses, algorithmically calculates overdue thresholds, and dispatches hyper-personalized, AI-driven escalation emails at strict intervals to accelerate cash flow recovery.",
    tags: ["n8n", "Google Sheets", "Google Gemini", "Gmail"],
    problem:
      "Organizations lose predictable cash flow and waste critical resources manually tracking overdue invoices. Traditional billing systems rely on static, easily ignored reminders that fail to address client-specific nuances. Without continuous oversight and structured escalation intervals, overdue balances compound, tracking gaps widen, and collections stall — directly harming operational liquidity.",
    process: [
      "Payment status is monitored continuously through a polling trigger.",
      "Days overdue are calculated and grouped into set intervals: 7, 14, 21, or 28 days.",
      "An AI agent processes the invoice details and drafts a tailored escalation email matching the current tier.",
      "The drafted email is sent through Gmail.",
      "The database is updated to prevent duplicate tracking or repeat sends.",
    ],
    result:
      "An end-to-end automated collection framework that eliminates manual tracking entirely. The pipeline tracks payment status, isolates overdue accounts, and uses AI to generate and send custom, escalating email sequences that protect client relationships while accelerating payment.",
    impact:
      "Faster average follow-up — reminders go out the day an account crosses a threshold, not whenever someone gets to it. ~10 hours/week returned to the finance team.",
    cover: invoiceCover,
    screenshots: [
      { url: bmlInvoice.url, caption: "n8n workflow — BML Invoice Collection System" },
      { url: bmlInvoice2.url, caption: "Invoice tracking sheet" },
      { url: bmlInvoice1.url, caption: "AI-generated follow-up email" },
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
      "The automation filters out low-scoring opportunities and maps high-value, highly compatible grants directly into a central tracking database. By replacing manual vetting with automated AI scoring, the system eliminates hours of manual research and ensures the hospital instantly prioritizes top-tier funding matches.",
    impact:
      "Grants that match the hospital's criteria get identified and flagged consistently, instead of relying on manual research that can miss high-value opportunities. Application drafts are ready in minutes instead of weeks, freeing healthcare staff to stay focused on clinical work.",
    cover: grantCover,
  },
];
