// Product data by category
const products = [
    // Fruits & Vegetables
   
    {    "id": 1,
        "title": "Fresh Apples",
        "description": "Fresh and crunchy red apples, 1kg",
        "price": 120,
        "category": "fruits-vegetables",
        "image": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Fresh"
    },
    {
        "id": 2,
        "title": "Bananas",
        "description": "Ripe and sweet bananas, 1 dozen",
        "price": 60,
        "category": "fruits-vegetables",
        "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Best Seller"
    },
    {
        "id": 4,
        "title": "Potatoes",
        "description": "Fresh potatoes, 1kg",
        "price": 25,
        "category": "fruits-vegetables",
        "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Value Pack"
    },
    {
        "id": 5,
        "title": "Oranges",
        "description": "Juicy navel oranges, 1kg",
        "price": 90,
        "category": "fruits-vegetables",
        "image": "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Vitamin C"
    },
    {
        "id": 6,
        "title": "Fresh Milk",
        "description": "Pasteurized cow milk, 1 liter",
        "price": 55,
        "category": "dairy-eggs",
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Fresh"
    },
    {
        "id": 7,
        "title": "Farm Eggs",
        "description": "Farm fresh eggs, 12 pieces",
        "price": 90,
        "category": "dairy-eggs",
        "image": "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Best Seller"
    },
    {
        "id": 8,
        "title": "Butter",
        "description": "Salted butter, 100g",
        "price": 50,
        "category": "dairy-eggs",
        "image": "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Popular"
    },
    {
        "id": 9,
        "title": "Potato Chips",
        "description": "Classic salted potato chips, 45g",
        "price": 20,
        "category": "snacks-beverages",
        "image": "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Popular"
    },
    {
        "id": 10,
        "title": "Chocolate Bar",
        "description": "Milk chocolate with almonds, 50g",
        "price": 80,
        "category": "snacks-beverages",
        "image": "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "New"
    },
    {
        "id": 13,
        "title": "Shampoo",
        "description": "Nourishing hair shampoo, 200ml",
        "price": 180,
        "category": "personal-care",
        "image": "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Popular"
    },
    {
        "id": 14,
        "title": "Hand Sanitizer",
        "description": "Alcohol-based hand sanitizer, 100ml",
        "price": 60,
        "category": "personal-care",
        "image": "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Essential"
    },
    {
        "id": 15,
        "title": "Dish Soap",
        "description": "Lemon scented dishwashing liquid, 500ml",
        "price": 75,
        "category": "home-essentials",
        "image": "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Value Pack"
    },
    {
        "id": 18,
        "title": "Baby Diapers",
        "description": "Ultra-absorbent diapers, size M, 30 count",
        "price": 350,
        "category": "baby-care",
        "image": "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Best Seller"
    },
    {
        "id": 20,
        "title": "Baby Shampoo",
        "description": "Tear-free formula, 200ml",
        "price": 150,
        "category": "baby-care",
        "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Gentle"
    },
    {
        "id": 21,
        "title": "Dog Food",
        "description": "Nutritious dry dog food, 3kg",
        "price": 450,
        "category": "pet-supplies",
        "image": "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Best Seller"
    },
    {
        "id": 22,
        "title": "Cat Litter",
        "description": "Clumping cat litter, 5kg",
        "price": 300,
        "category": "pet-supplies",
        "image": "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Popular"
    },
    {
        "id": 23,
        "title": "Pet Bowl",
        "description": "Stainless steel pet bowl, medium",
        "price": 150,
        "category": "pet-supplies",
        "image": "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Durable"
    },
    {
        "id": 24,
        "title": "Cat Food",
        "description": "Complete nutrition for adult cats, 2kg",
        "price": 400,
        "category": "pet-supplies",
        "image": "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Vet Recommended"
    },
    {
        "id": 25,
        "title": "Gaming Mouse",
        "description": "High-precision gaming mouse with RGB lighting",
        "price": 2499,
        "category": "electronics",
        "image": "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Gaming"
    },
    {
        "id": 26,
        "title": "USB-C Hub",
        "description": "Multi-port USB-C hub for enhanced connectivity",
        "price": 1999,
        "category": "electronics",
        "image": "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
        "badge": "Essential"
    }
];

// Authentication state
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Shopping cart array
let cart = [];

// DOM elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutModal = document.getElementById('checkoutModal');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutTotal = document.getElementById('checkoutTotal');
const overlay = document.getElementById('overlay');

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updateCartUI();
    setupEventListeners();
    checkAuthState();
});

// Profile Functions
function openProfile() {
    if (!currentUser) return;
    
    // Format join date
    let joinDateText = '';
    if (currentUser.joinDate) {
        const joinDate = new Date(currentUser.joinDate);
        const options = { year: 'numeric', month: 'long' };
        joinDateText = `Member since ${joinDate.toLocaleDateString('en-US', options)}`;
    }
    
    // Create profile content
    const profileContent = `
        <div class="modal-header">
            <h3>My Profile</h3>
            <button class="close-modal" onclick="closeProfile()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="profile-content">
            <div class="profile-header">
                <div class="profile-avatar">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="profile-info">
                    <h2 id="profileName">${currentUser.name}</h2>
                    <p id="profileEmail">${currentUser.email}</p>
                    <p class="join-date">${joinDateText}</p>
                </div>
            </div>
            
            <div class="profile-actions">
                <button class="profile-action-btn" onclick="editProfile()">
                    <i class="fas fa-user-edit"></i> Edit Profile
                </button>
                <button class="profile-action-btn" onclick="changePassword()">
                    <i class="fas fa-key"></i> Change Password
                </button>
                <button class="profile-action-btn" onclick="showAddresses()">
                    <i class="fas fa-map-marker-alt"></i> Manage Addresses
                </button>
                <button class="profile-action-btn" onclick="viewOrderHistory()">
                    <i class="fas fa-shopping-bag"></i> Order History
                </button>
                <button class="profile-action-btn" onclick="logout()">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </button>
            </div>
        </div>
    `;
    
    // Update modal content
    const profileModal = document.getElementById('profileModal');
    profileModal.innerHTML = profileContent;
    profileModal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeProfile() {
    document.getElementById('profileModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function editProfile() {
    const newName = prompt('Enter your new name:', currentUser.name);
    if (newName && newName.trim() !== '') {
        // Update current user
        currentUser.name = newName.trim();
        updateUserData();
        
        // Update UI
        document.getElementById('profileName').textContent = newName;
        checkAuthState();
        showNotification('Profile updated successfully');
    }
}

function changePassword() {
    const oldPassword = prompt('Enter your current password:');
    if (!oldPassword) return;
    
    // Verify old password
    if (oldPassword !== currentUser.password) {
        showNotification('Incorrect current password', 'error');
        return;
    }
    
    const newPassword = prompt('Enter your new password (min 6 characters):');
    if (!newPassword || newPassword.length < 6) {
        showNotification('Password must be at least 6 characters long', 'error');
        return;
    }
    
    const confirmPassword = prompt('Confirm your new password:');
    if (newPassword !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    // Update password
    currentUser.password = newPassword;
    updateUserData();
    
    showNotification('Password updated successfully');
}

// Address Management
function addAddress() {
    const address = {
        nickname: prompt('Enter a nickname for this address (e.g., Home, Work):'),
        street: prompt('Street Address:'),
        city: prompt('City:'),
        state: prompt('State/Province:'),
        zipCode: prompt('ZIP/Postal Code:'),
        country: prompt('Country:', 'USA'),
        isDefault: !currentUser.addresses || currentUser.addresses.length === 0
    };
    
    if (address.street && address.city && address.state && address.zipCode) {
        if (!currentUser.addresses) currentUser.addresses = [];
        currentUser.addresses.push(address);
        updateUserData();
        showAddresses();
        showNotification('Address added successfully');
    } else {
        showNotification('Please fill in all required address fields', 'error');
    }
}

function editAddress(index) {
    if (!currentUser.addresses || !currentUser.addresses[index]) return;
    
    const address = currentUser.addresses[index];
    const updatedAddress = {
        nickname: prompt('Nickname (e.g., Home, Work):', address.nickname || ''),
        street: prompt('Street Address:', address.street || ''),
        city: prompt('City:', address.city || ''),
        state: prompt('State/Province:', address.state || ''),
        zipCode: prompt('ZIP/Postal Code:', address.zipCode || ''),
        country: prompt('Country:', address.country || 'USA'),
        isDefault: address.isDefault
    };
    
    if (updatedAddress.street && updatedAddress.city && updatedAddress.state && updatedAddress.zipCode) {
        currentUser.addresses[index] = updatedAddress;
        updateUserData();
        showAddresses();
        showNotification('Address updated successfully');
    } else {
        showNotification('Please fill in all required address fields', 'error');
    }
}

function viewOrderHistory() {
    // Create order history content
    const orderHistoryContent = `
        <div class="modal-header">
            <h3><i class="fas fa-shopping-bag"></i> Order History</h3>
            <button class="close-modal" onclick="openProfile()">
                <i class="fas fa-arrow-left"></i> Back to Profile
            </button>
        </div>
        <div class="order-history">
            ${currentUser.orders && currentUser.orders.length > 0 ? 
                currentUser.orders.map((order, index) => `
                    <div class="order-item">
                        <div class="order-header">
                            <div>
                                <h4>Order #${order.orderNumber || (index + 1000)}</h4>
                                <p class="order-date">${new Date(order.date || new Date()).toLocaleDateString()}</p>
                            </div>
                            <div class="order-status ${order.status || 'completed'}">
                                ${order.status || 'Completed'}
                            </div>
                        </div>
                        <div class="order-products">
                            ${order.items ? order.items.map(item => `
                                <div class="order-product">
                                    <img src="${item.image || 'https://via.placeholder.com/50'}" alt="${item.name}">
                                    <div class="product-details">
                                        <h5>${item.name}</h5>
                                        <p>Qty: ${item.quantity} × ₹${item.price?.toFixed(2) || '0.00'}</p>
                                    </div>
                                </div>
                            `).join('') : ''}
                        </div>
                        <div class="order-footer">
                            <div class="order-total">
                                Total: ₹${order.total?.toFixed(2) || '0.00'}
                            </div>
                            <button class="btn-view-order" onclick="viewOrderDetails('${order.id || index}')">
                                View Details
                            </button>
                        </div>
                    </div>
                `).join('') : `
                    <div class="no-orders">
                        <i class="fas fa-shopping-basket"></i>
                        <h4>No Orders Yet</h4>
                        <p>You haven't placed any orders yet.</p>
                        <button class="btn-shop-now" onclick="closeProfile(); window.scrollTo(0, 0);">
                            Start Shopping
                        </button>
                    </div>
                `
            }
        </div>
    `;
    
    // Update modal content
    const profileModal = document.getElementById('profileModal');
    profileModal.innerHTML = orderHistoryContent;
    profileModal.classList.add('active');
}

function viewOrderDetails(orderId) {
    // Find the order in the central orders storage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const order = allOrders.find(o => o.id === orderId);
    
    if (!order) {
        showNotification('Order not found', 'error');
        return;
    }
    
    // Format order date
    const orderDate = new Date(order.date);
    const formattedDate = orderDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Create order items HTML
    let orderItemsHTML = '';
    order.items.forEach(item => {
        orderItemsHTML += `
            <div class="order-item-detail">
                <img src="${item.image || 'https://via.placeholder.com/80'}" alt="${item.title}">
                <div class="item-details">
                    <h4>${item.title}</h4>
                    <p class="item-price">₹${item.price.toFixed(2)} x ${item.quantity}</p>
                    <p class="item-total">₹${(item.price * item.quantity).toFixed(2)}</p>
                </div>
            </div>`;
    });
    
    // Create order details modal
    const modalHTML = `
        <div class="order-details-modal">
            <div class="modal-header">
                <h3>Order #${order.orderNumber || order.id.substring(0, 8)}</h3>
                <button class="close-modal" onclick="closeOrderDetails()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="order-details-content">
                <div class="order-summary">
                    <div class="order-status-section">
                        <span class="order-status-badge status-${order.status?.toLowerCase() || 'pending'}">
                            ${order.status || 'Pending'}
                        </span>
                        <p class="order-date">Placed on ${formattedDate}</p>
                    </div>
                    
                    <div class="order-items">
                        <h4>Order Items (${order.items.length})</h4>
                        <div class="items-list">
                            ${orderItemsHTML}
                        </div>
                    </div>
                    
                    <div class="order-totals">
                        <div class="total-row">
                            <span>Subtotal</span>
                            <span>₹${order.total.toFixed(2)}</span>
                        </div>
                        <div class="total-row">
                            <span>Shipping</span>
                            <span>FREE</span>
                        </div>
                        <div class="total-row grand-total">
                            <span>Total</span>
                            <span>₹${order.total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                
                <div class="order-address">
                    <h4>Delivery Address</h4>
                    <div class="address-card">
                        <p><strong>${order.customer.fullName}</strong></p>
                        <p>${order.customer.address}</p>
                        <p>${order.customer.city}, ${order.customer.zipCode}</p>
                        <p>${order.customer.email}</p>
                    </div>
                    
                    <div class="order-actions">
                        <button class="btn-track-order" onclick="trackOrder('${order.id}')">
                            <i class="fas fa-truck"></i> Track Order
                        </button>
                        <button class="btn-need-help" onclick="contactSupport('${order.id}')">
                            <i class="fas fa-headset"></i> Need Help?
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <style>
            .order-details-modal {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: white;
                border-radius: 12px;
                width: 90%;
                max-width: 900px;
                max-height: 90vh;
                overflow-y: auto;
                z-index: 1002;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            
            .order-details-content {
                display: grid;
                grid-template-columns: 1.5fr 1fr;
                gap: 30px;
                padding: 25px;
            }
            
            .order-status-section {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
                text-align: center;
            }
            
            .order-status-badge {
                display: inline-block;
                padding: 6px 15px;
                border-radius: 20px;
                font-weight: 600;
                font-size: 0.9rem;
                margin-bottom: 8px;
            }
            
            .order-date {
                color: #7f8c8d;
                font-size: 0.9rem;
                margin: 0;
            }
            
            .order-items h4, .order-address h4 {
                font-size: 1.1rem;
                margin-bottom: 15px;
                color: #2c3e50;
                border-bottom: 1px solid #eee;
                padding-bottom: 10px;
            }
            
            .order-item-detail {
                display: flex;
                gap: 15px;
                padding: 12px 0;
                border-bottom: 1px solid #f0f0f0;
            }
            
            .order-item-detail:last-child {
                border-bottom: none;
            }
            
            .order-item-detail img {
                width: 80px;
                height: 80px;
                object-fit: cover;
                border-radius: 6px;
            }
            
            .item-details {
                flex-grow: 1;
            }
            
            .item-details h4 {
                margin: 0 0 5px 0;
                font-size: 0.95rem;
                color: #2c3e50;
            }
            
            .item-price {
                color: #7f8c8d;
                font-size: 0.85rem;
                margin: 0 0 3px 0;
            }
            
            .item-total {
                font-weight: 600;
                color: #2c3e50;
                margin: 0;
            }
            
            .order-totals {
                margin-top: 20px;
                border-top: 1px solid #eee;
                padding-top: 15px;
            }
            
            .total-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 8px;
                color: #555;
            }
            
            .grand-total {
                font-size: 1.1rem;
                font-weight: 600;
                margin-top: 10px;
                padding-top: 10px;
                border-top: 1px solid #eee;
                color: #2c3e50;
            }
            
            .address-card {
                background: #f8f9fa;
                padding: 15px;
                border-radius: 8px;
                margin-bottom: 20px;
                line-height: 1.5;
            }
            
            .order-actions {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .btn-track-order, .btn-need-help {
                width: 100%;
                padding: 12px;
                border: none;
                border-radius: 6px;
                font-weight: 500;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 8px;
                transition: all 0.2s ease;
            }
            
            .btn-track-order {
                background: #e74c3c;
                color: white;
            }
            
            .btn-track-order:hover {
                background: #c0392b;
            }
            
            .btn-need-help {
                background: #f8f9fa;
                border: 1px solid #e0e0e0;
                color: #2c3e50;
            }
            
            .btn-need-help:hover {
                background: #e9ecef;
            }
            
            @media (max-width: 768px) {
                .order-details-content {
                    grid-template-columns: 1fr;
                }
                
                .order-address {
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 1px solid #eee;
                }
            }
        </style>`;
    
    // Create and show modal
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.innerHTML = modalHTML;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Add event listener for closing the modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeOrderDetails();
        }
    });
}

function closeOrderDetails() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

function trackOrder(orderId) {
    // In a real app, this would redirect to a tracking page or show tracking info
    showNotification(`Tracking information for order #${orderId} will be available soon.`, 'info');
}

function contactSupport(orderId) {
    // In a real app, this would open a support chat or form
    showNotification(`Need help with order #${orderId}? Our support team will contact you shortly.`, 'info');
}

function deleteAddress(index) {
    if (!currentUser.addresses || !currentUser.addresses[index]) return;
    
    if (confirm('Are you sure you want to delete this address?')) {
        currentUser.addresses.splice(index, 1);
        updateUserData();
        showAddresses();
        showNotification('Address deleted successfully');
    }
}

function showAddresses() {
    // Initialize addresses if not exists
    if (!currentUser.addresses) {
        currentUser.addresses = [];
        updateUserData();
    }
    
    // Create addresses HTML
    let addressesHTML = `
        <div class="addresses-list">
            <h4><i class="fas fa-map-marker-alt"></i> Saved Addresses</h4>
            ${currentUser.addresses.length > 0 ? 
                currentUser.addresses.map((addr, index) => `
                    <div class="address-item">
                        <h5>${addr.nickname || 'Address ' + (index + 1)}</h5>
                        <p>${addr.street}<br>
                        ${addr.city}, ${addr.state} ${addr.zipCode}<br>
                        ${addr.country}</p>
                        <div class="address-actions">
                            <button onclick="editAddress(${index})">Edit</button>
                            <button onclick="deleteAddress(${index})" class="delete">Delete</button>
                        </div>
                    </div>
                `).join('') : 
                '<p>No saved addresses found.</p>'
            }
        </div>
        <button class="add-address-btn" onclick="addAddress()">
            <i class="fas fa-plus"></i> Add New Address
        </button>
    `;
    
    // Show in a modal
    const modalContent = `
        <div class="modal-header">
            <h3>Manage Addresses</h3>
            <button class="close-modal" onclick="closeProfile()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="addresses-container">
            ${addressesHTML}
        </div>
    `;
    
    document.getElementById('profileModal').innerHTML = modalContent;
    document.getElementById('profileModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Helper function to update user data in storage
function updateUserData() {
    // Update in users array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = {...currentUser};
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Update in current user session
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Check authentication state and update UI
function checkAuthState() {
    const authButtons = document.getElementById('authButtons');
    const userMenu = document.getElementById('userMenu');
    const userGreeting = document.getElementById('userGreeting');
    
    if (currentUser) {
        authButtons.style.display = 'none';
        userMenu.style.display = 'flex';
        userGreeting.textContent = `Welcome, ${currentUser.name.split(' ')[0]}!`;
    } else {
        authButtons.style.display = 'flex';
        userMenu.style.display = 'none';
    }
}

// Authentication UI Functions
function openLogin() {
    document.getElementById('loginModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeLogin() {
    document.getElementById('loginModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('loginForm').reset();
}

function openRegister() {
    document.getElementById('registerModal').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

function closeRegister() {
    document.getElementById('registerModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
    document.getElementById('registerForm').reset();
}

function switchToRegister() {
    closeLogin();
    openRegister();
}

function switchToLogin() {
    closeRegister();
    openLogin();
}

function loginUser(email, password, rememberMe) {
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        if (rememberMe) {
            localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
            sessionStorage.setItem('currentUser', JSON.stringify(user));
        }
        closeLogin();
        checkAuthState();
        showNotification('Login successful!');
        return true;
    } else {
        showNotification('Invalid email or password', 'error');
        return false;
    }
}

function registerUser(name, email, password) {
    // Check if user already exists
    if (users.some(user => user.email === email)) {
        showNotification('Email already registered', 'error');
        return false;
    }
    
    // Create new user
    const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password, // In a real app, passwords should be hashed
        joinDate: new Date().toISOString()
    };
    
    // Add to users array and update local storage
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login the new user
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    
    closeRegister();
    checkAuthState();
    showNotification('Registration successful! Welcome to QuickShop!');
    return true;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    sessionStorage.removeItem('currentUser');
    checkAuthState();
    showNotification('Successfully logged out');
}

// Load products into the grid
function loadProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Create a fallback image URL in case the original fails
    const fallbackImage = 'https://via.placeholder.com/400x300/f8f9fa/6c757d?text=' + encodeURIComponent(product.title);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.title}" 
                 onerror="this.src='${fallbackImage}'; this.onerror=null;"
                 loading="lazy">
            <div class="product-badge">${product.badge}</div>
        </div>
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    return card;
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showNotification(`${product.title} added to cart!`);
}

// Remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update product quantity in cart
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = createCartItem(item);
            cartItems.appendChild(cartItem);
        });
    }
    
    // Update cart total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2);
    checkoutTotal.textContent = total.toFixed(2);
    
    // Enable/disable checkout button
    const checkoutBtn = document.querySelector('.checkout-btn');
    checkoutBtn.disabled = cart.length === 0;
}

// Create cart item element
function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        <div class="cart-item-image" style="background-image: url('${item.image}')"></div>
        <div class="cart-item-info">
            <div class="cart-item-title">${item.title}</div>
            <div class="cart-item-price">₹${item.price.toFixed(2)}</div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span class="quantity">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `;
    return cartItem;
}

// Toggle cart sidebar
function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// Open checkout modal
function checkout() {
    if (cart.length === 0) return;
    
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
    cartSidebar.classList.remove('active');
}

// Close checkout modal
function closeCheckout() {
    checkoutModal.classList.remove('active');
    overlay.classList.remove('active');
}

// Scroll to products section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({
        behavior: 'smooth'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Admin login button
    const adminLoginBtn = document.getElementById('adminLoginBtn');
    if (adminLoginBtn) {
        adminLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openAdminLogin();
        });
    }

    // Admin login form
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleAdminLogin(e);
        });
    }

    // Close modals when clicking overlay
    overlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        checkoutModal.classList.remove('active');
        document.getElementById('loginModal').classList.remove('active');
        document.getElementById('registerModal').classList.remove('active');
        overlay.classList.remove('active');
    });
    
    // Login form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        const rememberMe = document.getElementById('rememberMe').checked;
        
        loginUser(email, password, rememberMe);
    });
    
    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            showNotification('Passwords do not match', 'error');
            return;
        }
        
        registerUser(name, email, password);
    });
    
    // Handle checkout form submission
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        processOrder();
    });
    
    // Format card number input
    const cardNumberInput = document.getElementById('cardNumber');
    cardNumberInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
        if (formattedValue.length > 19) formattedValue = formattedValue.substr(0, 19);
        e.target.value = formattedValue;
    });
    
    // Format expiry date input
    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        e.target.value = value;
    });
    
    // Format CVV input
    const cvvInput = document.getElementById('cvv');
    cvvInput.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Process order
function processOrder() {
    // Get form data
    const formData = new FormData(checkoutForm);
    const orderId = 'ORD' + Date.now();
    const orderDate = new Date().toISOString();
    const orderTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const orderData = {
        id: orderId,
        userId: currentUser ? currentUser.id : null,
        customer: {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            zipCode: document.getElementById('zipCode').value
        },
        items: [...cart], // Create a copy of the cart
        total: orderTotal,
        date: orderDate,
        status: 'pending',
        paymentStatus: 'paid',
        orderNumber: 1000 + Math.floor(Math.random() * 9000) // Generate a random order number
    };
    
    // Simulate order processing
    showLoadingState();
    
    setTimeout(() => {
        // Save order to central orders storage
        const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        allOrders.push(orderData);
        localStorage.setItem('orders', JSON.stringify(allOrders));
        
        // If user is logged in, also save to their order history
        if (currentUser) {
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const userIndex = users.findIndex(u => u.id === currentUser.id);
            if (userIndex !== -1) {
                if (!users[userIndex].orders) {
                    users[userIndex].orders = [];
                }
                users[userIndex].orders.push({
                    id: orderId,
                    date: orderDate,
                    total: orderTotal,
                    status: 'pending',
                    items: orderData.items.length
                });
                localStorage.setItem('users', JSON.stringify(users));
                
                // Update current user data
                currentUser = users[userIndex];
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        }
        
        // Clear cart
        cart = [];
        updateCartUI();
        
        // Close modal
        closeCheckout();
        
        // Show success message
        showOrderSuccess(orderData);
        
        // Reset form
        checkoutForm.reset();
        
        // Refresh admin dashboard if open
        if (isAdmin) {
            refreshAdminDashboard();
        }
    }, 2000);
}

// Show loading state during order processing
function showLoadingState() {
    const submitBtn = document.querySelector('.place-order-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

// Show order success notification
function showOrderSuccess(orderData) {
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <div class="success-content">
            <i class="fas fa-check-circle"></i>
            <h3>Order Placed Successfully!</h3>
            <p>Thank you ${orderData.customer.fullName}!</p>
            <p>Order Total: ₹${orderData.total.toFixed(2)}</p>
            <p>A confirmation email has been sent to ${orderData.customer.email}</p>
        </div>
    `;
    
    // Add success notification styles
    const style = document.createElement('style');
    style.textContent = `
        .success-notification {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 1003;
            text-align: center;
            max-width: 400px;
            animation: slideIn 0.3s ease;
        }
        
        .success-content i {
            font-size: 3rem;
            color: #27ae60;
            margin-bottom: 1rem;
        }
        
        .success-content h3 {
            color: #27ae60;
            margin-bottom: 1rem;
        }
        
        .success-content p {
            margin-bottom: 0.5rem;
            color: #666;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -60%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    overlay.classList.add('active');
    
    // Remove notification after 4 seconds
    setTimeout(() => {
        notification.remove();
        style.remove();
        overlay.classList.remove('active');
    }, 4000);
}

// Show notification with type (success, error, etc.)
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    // Add icon based on type
    let icon = 'check-circle';
    if (type === 'error') icon = 'exclamation-circle';
    else if (type === 'info') icon = 'info-circle';
    else if (type === 'warning') icon = 'exclamation-triangle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 1004;
            animation: slideInRight 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
            max-width: 350px;
        }
        
        .notification i {
            font-size: 1.2rem;
        }
        
        .notification.error {
            background: #e74c3c;
        }
        
        .notification.warning {
            background: #f39c12;
        }
        
        .notification.info {
            background: #3498db;
        }
        
        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(100%);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', 'true');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add some interactive animations
function addInteractiveAnimations() {
    // Add hover effects to product cards
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Admin functionality
let isAdmin = false;
const ADMIN_CREDENTIALS = {
    email: "admin@quickshop.com",
    password: "admin123"
};

// Open admin login modal
function openAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Close admin login modal
function closeAdminLogin() {
    document.getElementById('adminLoginModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('adminLoginForm').reset();
    const errorElement = document.getElementById('adminLoginError');
    if (errorElement) errorElement.style.display = 'none';
}

// Handle admin login form submission
function handleAdminLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('adminEmail').value;
    const password = document.getElementById('adminPassword').value;
    const errorElement = document.getElementById('adminLoginError');
    
    if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
        isAdmin = true;
        closeAdminLogin();
        openAdminDashboard();
        showNotification('Admin login successful!', 'success');
    } else {
        if (errorElement) {
            errorElement.textContent = 'Invalid admin credentials';
            errorElement.style.display = 'block';
        }
    }
}

// Open admin dashboard
function openAdminDashboard() {
    const modal = document.getElementById('adminDashboardModal');
    modal.style.display = 'block';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    document.getElementById('overlay').style.display = 'block';
    refreshAdminDashboard();
}

// Close admin dashboard
function closeAdminDashboard() {
    const modal = document.getElementById('adminDashboardModal');
    modal.classList.remove('show');
    modal.style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Logout admin
function logoutAdmin() {
    isAdmin = false;
    closeAdminDashboard();
    showNotification('Admin logged out successfully', 'success');
}
function refreshAdminDashboard() {
    if (!isAdmin) return;
    
    // Show loading state
    const ordersList = document.getElementById('adminOrdersList');
    if (ordersList) {
        ordersList.innerHTML = `
            <tr>
                <td colspan="7" class="loading-state">
                    <i class="fas fa-spinner fa-spin"></i> Loading orders...
                </td>
            </tr>`;
    }
    
    // Get all users and their orders
    const users = JSON.parse(localStorage.getItem('users')) || [];
    let allOrders = [];
    
    users.forEach(user => {
        if (user.orders && user.orders.length > 0) {
            user.orders.forEach(order => {
                order.userName = user.name;
                order.userEmail = user.email;
                allOrders.push(order);
            });
        }
    });
    
    // Sort orders by date (newest first)
    allOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Calculate stats
    const stats = {
        total: allOrders.length,
        pending: 0,
        completed: 0,
        revenue: 0
    };
    
    allOrders.forEach(order => {
        const status = order.status?.toLowerCase() || 'pending';
        if (status === 'pending') {
            stats.pending++;
        } else if (status === 'completed') {
            stats.completed++;
            stats.revenue += order.total || 0;
        }
    });
    
    // Update stats
    const totalOrders = document.getElementById('totalOrders');
    const pendingOrders = document.getElementById('pendingOrders');
    const completedOrders = document.getElementById('completedOrders');
    const totalRevenue = document.getElementById('totalRevenue');
    
    if (totalOrders) totalOrders.textContent = stats.total;
    if (pendingOrders) pendingOrders.textContent = stats.pending;
    if (completedOrders) completedOrders.textContent = stats.completed;
    if (totalRevenue) {
        totalRevenue.textContent = '₹' + stats.revenue.toFixed(2);
    }
    
    // Update orders table
    const ordersTable = document.getElementById('adminOrdersList');
    if (!ordersTable) return;
    
    if (allOrders.length === 0) {
        ordersTable.innerHTML = `
            <tr>
                <td colspan="7" class="no-orders">
                    <i class="fas fa-inbox"></i>
                    <p>No orders found</p>
                </td>
            </tr>`;
        return;
    }
    
    // Show only the 10 most recent orders
    const recentOrders = allOrders.slice(0, 10);
    
    let ordersHTML = '';
    recentOrders.forEach(order => {
        const orderDate = new Date(order.date);
        const formattedDate = orderDate.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const statusClass = `status-${order.status?.toLowerCase() || 'pending'}`;
        const customerName = order.customer?.fullName || order.userName || 'Guest';
        const itemsCount = order.items?.length || 0;
        const orderTotal = order.total ? '₹' + order.total.toFixed(2) : '₹0.00';
        
        ordersHTML += `
            <tr class="order-row" onclick="viewAdminOrderDetails('${order.id}')">
                <td>#${order.orderNumber || order.id.substring(0, 8)}</td>
                <td class="customer-cell">
                    <div class="customer-info">
                        <span class="customer-name">${customerName}</span>
                        <span class="customer-email">${order.customer?.email || order.userEmail || ''}</span>
                    </div>
                </td>
                <td>${formattedDate}</td>
                <td>${itemsCount} ${itemsCount === 1 ? 'item' : 'items'}</td>
                <td class="amount">${orderTotal}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        ${order.status || 'Pending'}
                    </span>
                </td>
                <td class="actions">
                    <button class="view-order-btn" onclick="event.stopPropagation(); viewAdminOrderDetails('${order.id}')">
                        <i class="fas fa-eye"></i> View
                    </button>
                </td>
            </tr>`;
    });
    
    ordersTable.innerHTML = ordersHTML;
}

// View order details in admin panel
function viewAdminOrderDetails(orderId) {
    // Get all orders from storage
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Find the order by ID
    const order = allOrders.find(o => o.id === orderId);
    
    if (!order) {
        showNotification('Order not found', 'error');
        return;
    }
    
    // Format order date
    const orderDate = new Date(order.date);
    const formattedDate = orderDate.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Format customer info
    const customerName = order.customer?.fullName || order.userName || 'Guest';
    const customerEmail = order.customer?.email || order.userEmail || 'N/A';
    const customerPhone = order.customer?.phone || order.phone || 'N/A';
    
    // Format address
    const address = order.shippingAddress || order.address || {};
    const formattedAddress = address.streetAddress ? 
        `${address.streetAddress}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}` :
        'No address provided';
    
    // Format payment info
    const paymentMethod = order.payment?.method || 'Credit/Debit Card';
    const paymentStatus = order.payment?.status || 'Paid';
    const paymentStatusClass = paymentStatus.toLowerCase() === 'paid' ? 'status-delivered' : 'status-pending';
    
    // Build order items HTML
    let orderItemsHTML = order.items.map(item => {
        const fallbackImage = 'https://via.placeholder.com/70x70/f8f9fa/6c757d?text=' + encodeURIComponent(item.name || 'Product');
        return `
        <div class="order-item">
            <img src="${item.image || fallbackImage}" 
                 alt="${item.name}" 
                 class="order-item-image"
                 onerror="this.src='${fallbackImage}'; this.onerror=null;">
            <div class="order-item-details">
                <h4>${item.name}</h4>
                <p class="order-item-price">₹${item.price?.toFixed(2)} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}</p>
            </div>
        </div>`;
    }).join('');
    
    // Build modal HTML
    const modalHTML = `
    <div class="modal order-details-modal" id="orderDetailsModal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Order #${order.orderNumber || order.id.substring(0, 8)}</h2>
                <span class="close-modal" onclick="closeModal('orderDetailsModal')">&times;</span>
            </div>
            <div class="modal-body">
                <div class="order-details-grid">
                    <!-- Order Summary -->
                    <div class="order-section">
                        <h3><i class="fas fa-shopping-bag"></i> Order Summary</h3>
                        <div class="order-meta">
                            <p><strong>Order Date:</strong> ${formattedDate}</p>
                            <p><strong>Status:</strong> <span class="status-badge status-${order.status?.toLowerCase() || 'pending'}">${order.status || 'Pending'}</span></p>
                            <p><strong>Order Total:</strong> ₹${order.total?.toFixed(2) || '0.00'}</p>
                        </div>
                    </div>
                    
                    <!-- Customer Information -->
                    <div class="order-section">
                        <h3><i class="fas fa-user"></i> Customer Information</h3>
                        <div class="customer-details">
                            <p><strong>Name:</strong> ${customerName}</p>
                            <p><strong>Email:</strong> ${customerEmail}</p>
                            <p><strong>Phone:</strong> ${customerPhone}</p>
                        </div>
                    </div>
                    
                    <!-- Shipping Address -->
                    <div class="order-section">
                        <h3><i class="fas fa-truck"></i> Shipping Address</h3>
                        <div class="shipping-address">
                            <p>${formattedAddress.replace(/,/g, ',<br>')}</p>
                        </div>
                    </div>
                    
                    <!-- Payment Information -->
                    <div class="order-section">
                        <h3><i class="fas fa-credit-card"></i> Payment Information</h3>
                        <div class="payment-details">
                            <p><strong>Method:</strong> ${paymentMethod}</p>
                            <p><strong>Status:</strong> <span class="status-badge ${paymentStatusClass}">${paymentStatus}</span></p>
                            <p><strong>Amount Paid:</strong> ₹${order.total?.toFixed(2) || '0.00'}</p>
                        </div>
                    </div>
                    
                    <!-- Order Items -->
                    <div class="order-section order-items-section">
                        <h3><i class="fas fa-box-open"></i> Order Items (${order.items.length})</h3>
                        <div class="order-items-list">
                            ${orderItemsHTML}
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary" onclick="closeModal('orderDetailsModal')">Close</button>
                <button class="btn btn-primary" onclick="updateOrderStatus('${order.id}')">
                    <i class="fas fa-sync-alt"></i> Update Status
                </button>
                <button class="btn btn-danger" onclick="cancelOrder('${order.id}')" ${order.status === 'cancelled' || order.status === 'delivered' ? 'disabled' : ''}>
                    <i class="fas fa-times"></i> Cancel Order
                </button>
                <button class="btn btn-success" onclick="markAsShipped('${order.id}')" ${order.status === 'shipped' || order.status === 'delivered' || order.status === 'cancelled' ? 'disabled' : ''}>
                    <i class="fas fa-truck"></i> Mark as Shipped
                </button>
                <button class="btn btn-success" onclick="markAsDelivered('${order.id}')" ${order.status === 'delivered' || order.status === 'cancelled' ? 'disabled' : ''}>
                    <i class="fas fa-check"></i> Mark as Delivered
                </button>
            </div>
        </div>
    </div>`;
    
    // Add modal to DOM and show it
    closeAnyOpenModals();
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modal = document.getElementById('orderDetailsModal');
    modal.style.display = 'block';
    
    // Close modal when clicking outside content
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal('orderDetailsModal');
        }
    };
    
    // Close with Escape key
    document.addEventListener('keydown', function handleEsc(event) {
        if (event.key === 'Escape') {
            closeModal('orderDetailsModal');
            document.removeEventListener('keydown', handleEsc);
        }
    });
}

// Update order status (general function)
function updateOrderStatus(orderId, status) {
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const orderIndex = allOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        // Update the order status
        allOrders[orderIndex].status = status;
        
        // Update the order in the central orders array
        localStorage.setItem('orders', JSON.stringify(allOrders));
        
        // Also update the order in the user's order history if user is logged in
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        users.forEach(user => {
            if (user.orders) {
                const userOrderIndex = user.orders.findIndex(o => o.id === orderId);
                if (userOrderIndex !== -1) {
                    user.orders[userOrderIndex].status = status;
                }
            }
        });
        localStorage.setItem('users', JSON.stringify(users));
        
        // Refresh the UI
        refreshAdminDashboard();
        
        // If the order details modal is open, update it
        const modal = document.getElementById('orderDetailsModal');
        if (modal && modal.style.display === 'block') {
            viewAdminOrderDetails(orderId);
        }
        
        showNotification(`Order status updated to ${status}`, 'success');
        return true;
    }
    
    showNotification('Order not found', 'error');
    return false;
}

// Mark order as shipped
function markAsShipped(orderId) {
    return updateOrderStatus(orderId, 'shipped');
}

// Mark order as delivered
function markAsDelivered(orderId) {
    return updateOrderStatus(orderId, 'delivered');
}

// Cancel order
function cancelOrder(orderId) {
    if (confirm('Are you sure you want to cancel this order? This action cannot be undone.')) {
        return updateOrderStatus(orderId, 'cancelled');
    }
    return false;
}

// Close any open modals before opening a new one
function closeAnyOpenModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Close modal by ID
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        // Remove the modal from DOM if it's a dynamically created one
        if (modalId === 'orderDetailsModal') {
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300); // Wait for any animations to complete
        }
    }
    document.getElementById('overlay').style.display = 'none';
}

// User Dashboard Functions
function openUserDashboard() {
    if (!currentUser) {
        showNotification('Please login to view your dashboard', 'error');
        openLogin();
        return;
    }
    
    const modal = document.getElementById('userDashboardModal');
    // Ensure modal is visible and page scrolling disabled
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Trigger reflow to ensure the element is in the DOM
    void modal.offsetWidth;
    
    // Add show class for the fade-in effect
    modal.classList.add('show');
    
    // Load dashboard content
    loadUserDashboard();
    
    // Focus the close button for better accessibility
    const closeBtn = modal.querySelector('.close-dashboard');
    if (closeBtn) {
        setTimeout(() => closeBtn.focus(), 100);
    }
}

function closeUserDashboard() {
    const modal = document.getElementById('userDashboardModal');
    modal.classList.remove('show');
    
    // Wait for the animation to complete before hiding the modal
    setTimeout(() => {
        if (!modal.classList.contains('show')) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }, 300);
}

function refreshUserDashboard() {
    loadUserDashboard();
}

function loadUserDashboard() {
    if (!currentUser) return;
    
    // Update user info
    document.getElementById('dashboardUserName').textContent = currentUser.name;
    document.getElementById('dashboardUserEmail').textContent = currentUser.email;
    
    // Set join date (using registration date if available, otherwise current date)
    const joinDate = currentUser.joinDate || new Date().toISOString().split('T')[0];
    const formattedDate = new Date(joinDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('dashboardJoinDate').textContent = `Member since: ${formattedDate}`;
    
    // Load user's orders
    loadUserOrders();
}

function loadUserOrders() {
    const ordersList = document.getElementById('userOrdersList');
    if (!ordersList) return;
    
    // Show loading state
    ordersList.innerHTML = `
        <div class="loading-state">
            <i class="fas fa-spinner fa-spin"></i>
            <p>Loading your orders...</p>
        </div>`;
    
    // Get all orders from central storage and filter for current user
    const allOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    const userOrders = allOrders
        .filter(order => order.userId === currentUser.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)
    
    if (userOrders.length === 0) {
        ordersList.innerHTML = `
            <div class="no-orders">
                <i class="fas fa-shopping-bag"></i>
                <h3>No Orders Yet</h3>
                <p>You haven't placed any orders yet.</p>
                <button class="browse-products-btn" 
                        onclick="closeUserDashboard(); document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });">
                    Start Shopping
                </button>
            </div>`;
        return;
    }
    
    // Display only the 5 most recent orders
    const recentOrders = userOrders.slice(0, 5);
    
    // Build orders list HTML
    let ordersHTML = `
        <div class="orders-header">
            <h3>Recent Orders</h3>
            ${userOrders.length > 5 ? '<button class="view-all-btn" onclick="showAllOrders()">View All Orders</button>' : ''}
        </div>
        <div class="orders-list">
    `;
    
    recentOrders.forEach(order => {
        const orderDate = new Date(order.date);
        const formattedDate = orderDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Get first product image for thumbnail
        const firstProduct = order.items[0] || {};
        const fallbackImage = 'https://via.placeholder.com/60x60/f8f9fa/6c757d?text=' + encodeURIComponent(firstProduct.name || 'Product');
        const firstProductImage = firstProduct.image || fallbackImage;
        const itemsCount = order.items.length;
        const additionalItems = itemsCount > 1 ? `+${itemsCount - 1} more` : '';
        
        const statusClass = `status-${order.status?.toLowerCase() || 'pending'}`;
        
        ordersHTML += `
            <div class="order-item" onclick="viewOrderDetails('${order.id}')">
                <div class="order-image">
                    <img src="${firstProductImage}" 
                         alt="${firstProduct.name || 'Product'}"
                         onerror="this.src='${fallbackImage}'; this.onerror=null;">
                    ${itemsCount > 1 ? `<span class="additional-items">${additionalItems}</span>` : ''}
                </div>
                <div class="order-details">
                    <div class="order-header">
                        <h4>Order #${order.orderNumber || order.id.substring(0, 8)}</h4>
                        <span class="order-date">${formattedDate}</span>
                    </div>
                    <div class="order-status ${statusClass}">
                        ${order.status || 'Pending'}
                    </div>
                    <div class="order-total">₹${order.total.toFixed(2)}</div>
                </div>
                <div class="order-actions">
                    <button class="track-order-btn" onclick="event.stopPropagation(); trackOrder('${order.id}')">
                        <i class="fas fa-truck"></i> Track
                    </button>
                </div>
            </div>`;
    });
    
    ordersHTML += `
        </div>
        <div class="orders-footer">
            <p>Showing ${recentOrders.length} of ${userOrders.length} orders</p>
        </div>`;
    
    ordersList.innerHTML = ordersHTML;
}

function showAllOrders() {
    // This would show all orders in a separate view or modal
    showNotification('Showing all orders', 'info');
    // Implementation for showing all orders would go here
}

function addPaymentMethod() {
    showNotification('Add payment method feature coming soon!', 'info');
    // Implementation for adding payment method would go here
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    const userDashboardModal = document.getElementById('userDashboardModal');
    if (event.target === userDashboardModal) {
        closeUserDashboard();
    }
});

// Initialize animations after products are loaded
setTimeout(addInteractiveAnimations, 100);
