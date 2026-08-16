// Seeds sample Customers and Invoices so the dashboard/tables aren't empty.
// Run AFTER `npm run setup` (needs the admin account and settings to already exist).
//
// Usage:
//   cd backend
//   node src/setup/seedDemoData.js

require('dotenv').config({ path: '.env' });
require('dotenv').config({ path: '.env.local' });

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

async function seed() {
  try {
    const Admin = require('../models/coreModels/Admin');
    const Client = require('../models/appModels/Client');
    const Invoice = require('../models/appModels/Invoice');

    const admin = await Admin.findOne({ email: 'admin@admin.com' });
    if (!admin) {
      console.log('🚫 No admin found. Run `npm run setup` first.');
      process.exit();
    }

    // ---- Customers ----
    const customerData = [
      { name: 'Aarav Sharma', email: 'aarav.sharma@example.com', phone: '9820011122', country: 'India', address: 'Mumbai, Maharashtra' },
      { name: 'Priya Desai', email: 'priya.desai@example.com', phone: '9833344455', country: 'India', address: 'Pune, Maharashtra' },
      { name: 'Rohan Mehta', email: 'rohan.mehta@example.com', phone: '9845566778', country: 'India', address: 'Nashik, Maharashtra' },
      { name: 'Sneha Kulkarni', email: 'sneha.kulkarni@example.com', phone: '9856677889', country: 'India', address: 'Nagpur, Maharashtra' },
      { name: 'Vikram Joshi', email: 'vikram.joshi@example.com', phone: '9867788990', country: 'India', address: 'Thane, Maharashtra' },
      { name: 'Ananya Iyer', email: 'ananya.iyer@example.com', phone: '9878899001', country: 'India', address: 'Bengaluru, Karnataka' },
    ];

    const clients = [];
    for (const c of customerData) {
      const client = await new Client({ ...c, createdBy: admin._id, assigned: admin._id }).save();
      clients.push(client);
    }
    console.log(`👍 ${clients.length} customers created`);

    // ---- Invoices ----
    const statuses = ['sent', 'sent', 'draft', 'pending', 'sent'];
    const paymentStatuses = ['paid', 'unpaid', 'partially', 'paid', 'unpaid'];
    let invoiceCount = 0;

    for (let i = 0; i < clients.length; i++) {
      const client = clients[i];
      const qty = Math.floor(Math.random() * 3) + 1;
      const price = [15000, 25000, 42000, 8500, 60000][i % 5];
      const subTotal = qty * price;
      const taxRate = 18;
      const taxTotal = Math.round((subTotal * taxRate) / 100);
      const total = subTotal + taxTotal;

      const invoiceDate = new Date();
      invoiceDate.setDate(invoiceDate.getDate() - i * 7);
      const expiredDate = new Date(invoiceDate);
      expiredDate.setDate(expiredDate.getDate() + 15);

      await new Invoice({
        createdBy: admin._id,
        number: 1000 + i,
        year: invoiceDate.getFullYear(),
        date: invoiceDate,
        expiredDate,
        client: client._id,
        items: [
          {
            itemName: ['Website Development', 'CRM Setup', 'Consulting Hours', 'Software License', 'Support Retainer'][i % 5],
            description: 'Service rendered as per agreement',
            quantity: qty,
            price,
            total: qty * price,
          },
        ],
        taxRate,
        subTotal,
        taxTotal,
        total,
        currency: 'INR',
        status: statuses[i % statuses.length],
        paymentStatus: paymentStatuses[i % paymentStatuses.length],
      }).save();

      invoiceCount++;
    }
    console.log(`👍 ${invoiceCount} invoices created`);

    console.log('🥳 Demo data seeded successfully!');
    process.exit();
  } catch (e) {
    console.log('\n🚫 Error seeding demo data:');
    console.log(e);
    process.exit();
  }
}

seed();
