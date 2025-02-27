document.addEventListener("DOMContentLoaded", function () {
    // Simulated Data for Dashboard
    setTimeout(() => {
        document.getElementById("total-users").textContent = "1250";
        document.getElementById("active-cases").textContent = "230";
        document.getElementById("pending-requests").textContent = "45";
    }, 1000);

    // Sidebar Toggle for Mobile Screens
    const sidebar = document.querySelector(".sidebar");
    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "☰";
    toggleBtn.classList.add("toggle-btn");
    document.body.insertBefore(toggleBtn, sidebar);

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // User Management - Add User
    document.getElementById("add-user").addEventListener("click", function () {
        const userList = document.getElementById("user-list");
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>New User</td>
            <td>newuser@example.com</td>
            <td>Client</td>
            <td><button class="remove-user">Remove</button></td>
        `;
        userList.appendChild(row);
        
        // Remove User Event
        row.querySelector(".remove-user").addEventListener("click", function () {
            row.remove();
        });
    });

    // Content Management - Add Content
    document.getElementById("add-content").addEventListener("click", function () {
        const contentList = document.getElementById("content-list");
        const listItem = document.createElement("li");
        listItem.textContent = "New Legal Document";
        contentList.appendChild(listItem);
    });

    // Reports & Analytics - Dynamic Updates
    const reportsSection = document.getElementById("reports");
    reportsSection.innerHTML += "<p>Reports data loading...</p>";
    setTimeout(() => {
        reportsSection.innerHTML = "<h2>Reports & Analytics</h2><p>User activity and system logs updated.</p>";
    }, 1500);

    // Permissions & Roles - Assign User Roles
    const rolesSection = document.getElementById("roles");
    rolesSection.innerHTML += "<p>Loading roles...</p>";
    setTimeout(() => {
        rolesSection.innerHTML = "<h2>Permissions & Roles</h2><p>Admin, Lawyer, Client roles assigned successfully.</p>";
    }, 1500);

    // System Settings - Modify Site Options
    const settingsSection = document.getElementById("settings");
    settingsSection.innerHTML += "<p>Loading settings...</p>";
    setTimeout(() => {
        settingsSection.innerHTML = "<h2>System Settings</h2><p>Site configurations updated.</p>";
    }, 1500);

    // Notifications & Messages - Display Alerts
    const notificationsSection = document.getElementById("notifications");
    notificationsSection.innerHTML += "<p>Loading notifications...</p>";
    setTimeout(() => {
        notificationsSection.innerHTML = "<h2>Notifications & Messages</h2><p>You have 3 new messages.</p>";
    }, 1500);
});
