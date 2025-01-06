import React from 'react';

const DonationsPage = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#f9f9f9', color: '#333' }}>
            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', backgroundColor: '#fff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <header style={{ backgroundColor: '#007BFF', color: '#fff', padding: '20px 10px', textAlign: 'center' }}>
                <h1 style={{ margin: 0, fontSize: '2.5em' }}>Al Mehdi Welfare Association</h1>
                <p>Making a Difference, Together</p>
            </header>
                <h2 style={{ color: '#007BFF', marginBottom: '10px' }}>How Your Donations Help</h2>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                    <li><strong>Supporting Education:</strong> Providing school supplies, scholarships, and building schools for underserved areas.</li>
                    <li><strong>Medical Aid:</strong> Organizing free medical camps and providing life-saving treatments to those in need.</li>
                    <li><strong>Emergency Relief:</strong> Delivering food, water, and essential supplies during natural disasters and rebuilding homes.</li>
                    <li><strong>Empowering Women:</strong> Creating skill development programs and offering micro-loans to promote self-reliance.</li>
                    <li><strong>Feeding the Needy:</strong> Organizing food drives and ensuring no one in our community goes hungry.</li>
                </ul>

                <h2 style={{ color: '#007BFF', marginBottom: '10px' }}>Why Trust Us?</h2>
                <p>We operate with complete transparency and accountability:</p>
                <ul style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                    <li><strong>Certified Non-Profit:</strong> Registered and adheres to strict ethical guidelines.</li>
                    <li><strong>Track Record of Impact:</strong> Contributions directly fund promised programs.</li>
                    <li><strong>Open Books:</strong> Financial reports and project updates are always available.</li>
                </ul>

                <a href="donation-link.html" style={{ display: 'inline-block', backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', marginTop: '20px', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s', marginRight: '10px' }}>Donate Now</a>
                <a href="volunteer-link.html" style={{ display: 'inline-block', backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', marginTop: '20px', textDecoration: 'none', borderRadius: '5px', transition: 'background-color 0.3s' }}>Volunteer with Us</a>

                <h2 style={{ color: '#007BFF', marginBottom: '10px' }}>Have Questions?</h2>
                <p>Contact us to learn more about how your donations are utilized:</p>
                <p>
                    📧 <strong>Email:</strong> almehdiwelfareassociation14@gmail.com<br />
                    📞 <strong>Phone:</strong> +91 7051165918
                </p>

                <footer style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9em', color: '#666' }}>
                    <p>© 2024 Al Mehdi Welfare Association. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default DonationsPage;
