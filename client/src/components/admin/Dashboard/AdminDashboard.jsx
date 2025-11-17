const AdminDashboard = () => {
  const { stats } = useAdmin();
  
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <StatsCards stats={stats} />
      
      <div className="dashboard-grid">
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          {/* Recent users, bookings, etc */}
        </div>
        
        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <Button>Manage Users</Button>
          <Button>View Reports</Button>
          <Button>System Settings</Button>
        </div>
      </div>
    </div>
  );
};