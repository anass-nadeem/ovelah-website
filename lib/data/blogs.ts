export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  date: string;
  readTime: string;
  content: {
    heading?: string;
    paragraphs?: string[];
    listItems?: string[];
  }[];
}

export const blogs: BlogPost[] = [
  {
    slug: "engineering-maintenance-software",
    title: "How Engineering and Maintenance Companies Stop Losing Money Between the Job and the Invoice",
    metaTitle: "Engineering & Maintenance Software: Run Contracts Without Chaos",
    metaDescription: "See how maintenance companies manage service contracts, dispatch, quotations and invoices in one system, and why disconnected tools quietly cost money.",
    category: "Engineering & Maintenance",
    date: "2026-10-04",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "Maintenance work is steady, and that makes it valuable. It is also easy to run badly. Most engineering firms don't lose margin on the work itself. They lose it in the gaps: a quotation sitting in one tool, a job in a spreadsheet, an invoice built from memory a week later."
        ]
      },
      {
        heading: "The real problem: disconnected records",
        paragraphs: [
          "A typical service contract involves a client, several sites, recurring visits and technical documentation. When these live in separate files, three things happen:"
        ],
        listItems: [
          "Jobs get missed or duplicated. Nobody has one view of what is scheduled.",
          "Quotes drift from reality. Costs are estimated without the job details in front of the estimator.",
          "Invoices go out late. Billing waits for someone to collect the paperwork."
        ]
      },
      {
        heading: "What a connected workflow looks like",
        paragraphs: [
          "The cleanest operations follow one chain: Client → Location → Job → Quotation → Work → Invoice. Each step inherits the data from the one before it. A quote is built against a specific job at a specific site, so nothing is retyped and nothing is forgotten."
        ]
      },
      {
        heading: "What this means for owners and investors",
        listItems: [
          "Predictable revenue. Long-term contracts are tracked, not remembered.",
          "Faster cash conversion. Invoices follow completed work quickly.",
          "Visibility. Management sees open jobs, balances and expenses without chasing the field team.",
          "Scalability. Adding a client or a site doesn't mean adding admin headcount."
        ]
      },
      {
        heading: "What to look for in software",
        listItems: [
          "Client and location records in one place",
          "Quotations tied directly to jobs",
          "Invoicing and outstanding balances",
          "Reporting that doesn't need a data analyst"
        ],
        paragraphs: [
          "Ovelah connects clients, locations, jobs, quotations and invoices in a single system built for companies where the work happens in the field."
        ]
      }
    ]
  },
  {
    slug: "hvac-electrical-business-software",
    title: "HVAC and Electrical Contractors: Track Equipment, Win More Quotes, Get Paid Faster",
    metaTitle: "HVAC & Electrical Business Software: Quotes, Jobs, Assets",
    metaDescription: "Learn how HVAC and electrical contractors track equipment, schedule inspections and send accurate quotations, all from one connected platform.",
    category: "HVAC & Electrical",
    date: "2026-10-04",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "HVAC and electrical businesses sell expertise, but they run on records: which unit is installed where, when it was last serviced, what the last repair cost, and what is still unpaid. When those records are scattered, technicians arrive unprepared and customers notice."
        ]
      },
      {
        heading: "Three problems that show up in every growing contractor",
        listItems: [
          "Equipment history is invisible. If a technician can't see what is installed at a site, the first visit is spent finding out. That costs time and credibility.",
          "Quotes are slow and inconsistent. Installations need accurate labor and parts estimates. Quotes built from scratch each time are slower to send and easier to get wrong, and a slow quote often loses the job.",
          "Recurring inspections slip. Preventive maintenance is steady income, but only if it is scheduled and followed up."
        ]
      },
      {
        heading: "A better way to work",
        paragraphs: [
          "Software built around real operations ties these together:"
        ],
        listItems: [
          "Asset tracking linked to each client location",
          "Recurring inspection schedules so no contract visit is forgotten",
          "Quotations generated against the job, with labor and parts accounted for before the client approves",
          "Invoices and balances in the same system, so billing doesn't depend on memory"
        ]
      },
      {
        heading: "Why it matters beyond the office",
        paragraphs: [
          "For owners, this means fewer write-offs and cleaner margins. For investors, it means a business whose knowledge lives in a system instead of in a few people's heads, which makes it easier to grow and easier to hand over."
        ]
      },
      {
        heading: "A quick checklist",
        listItems: [
          "Can a technician see site and equipment details before arriving?",
          "Can you send a detailed quote the same day?",
          "Do you know today which clients owe you money?"
        ],
        paragraphs: [
          "If the answer to any of these is \"not easily,\" your tools are costing you work.",
          "Ovelah was built with HVAC and electrical maintenance in mind, and is used in live operations today."
        ]
      }
    ]
  },
  {
    slug: "facility-management-software",
    title: "Facility Management: Getting the Right Team to the Right Wing with the Right Materials",
    metaTitle: "Facility Management Software for Multi-Building Campuses",
    metaDescription: "How facility teams centralize requests, organize work by location, and send the right people with the right materials, without the back-and-forth.",
    category: "Facility Management",
    date: "2026-10-04",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "On a large campus, the hardest part of maintenance is rarely the repair. It is coordination. A request comes in by phone, another by message, a third by email. Someone has to decide who goes, where, and with what."
        ]
      },
      {
        heading: "Where facility operations break down",
        listItems: [
          "Requests arrive everywhere. Without one intake point, things are lost or duplicated.",
          "Location detail is vague. \"Second floor, east side\" isn't enough when there are many buildings.",
          "Materials are guessed. Teams make a second trip because the first one lacked a part.",
          "No record of what was done. Repeat issues go unnoticed."
        ]
      },
      {
        heading: "Organize by location first",
        paragraphs: [
          "The most effective facility teams treat location as the foundation. Every request is attached to a specific building, wing or site, so the job carries its context with it. The team knows where to go and what the job needs before they leave."
        ]
      },
      {
        heading: "What good looks like",
        listItems: [
          "One place for requests, so nothing depends on someone's inbox",
          "Jobs linked to exact locations, with the requirements attached",
          "Clear status from request to completion",
          "Costs and expenses recorded against the work, not reconstructed later",
          "A single view for managers, so questions about status take seconds"
        ]
      },
      {
        heading: "The business case",
        paragraphs: [
          "Fewer repeat trips, faster response, and a documented history of every site. For organizations managing facilities on contract, that history also supports renewals, because you can show the client exactly what was delivered.",
          "Ovelah manages clients, locations and jobs together, so facility teams work from one clear picture instead of many partial ones."
        ]
      }
    ]
  },
  {
    slug: "construction-contracting-software",
    title: "Construction Profitability Is Won or Lost in the Paperwork",
    metaTitle: "Construction Software: Control Costs, Labor and Invoicing",
    metaDescription: "Keep project expenses, labor and phased invoicing connected to each job site, so your projects stay profitable from quote to final payment.",
    category: "Construction & Contracting",
    date: "2026-10-04",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "Most construction companies know their big numbers: contract value, project length, headline cost. The danger sits in the small ones: an unlogged expense, a labor week nobody tallied, a phase invoice sent late. They add up, and by the time the project closes, the margin is gone."
        ]
      },
      {
        heading: "Why projects lose money quietly",
        listItems: [
          "Expenses are recorded after the fact, if at all",
          "Labor isn't tied to a specific job site, so true cost is a guess",
          "Phased invoicing is delayed, which strains cash flow",
          "The original quote and actual spend never meet in one place"
        ]
      },
      {
        heading: "Keep everything attached to the job",
        paragraphs: [
          "The principle is simple: every cost and every invoice belongs to a specific job and site. When expenses, labor and invoicing share one record, you can compare what you quoted against what you are spending while the project is still running, not after it ends."
        ]
      },
      {
        heading: "What owners and investors should look for",
        listItems: [
          "Live cost visibility per project",
          "Phased invoicing tied to progress, supporting steady cash flow",
          "Outstanding balances visible at a glance",
          "Consistent quotations so estimates are comparable across projects",
          "Reporting that shows which jobs make money and which don't"
        ]
      },
      {
        heading: "Practical, not complicated",
        paragraphs: [
          "Construction firms often avoid software because enterprise systems feel heavy. The better approach is a focused tool that covers the essentials: clients, sites, jobs, quotations, expenses and invoices, and does them reliably.",
          "Ovelah connects project expenses, labor tracking and phased invoicing to each job site, so profitability is something you can see, not something you find out later."
        ]
      }
    ]
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}