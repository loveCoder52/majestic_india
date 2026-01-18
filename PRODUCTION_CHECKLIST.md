# 🚀 Production Deployment Checklist

Before deploying to production, ensure everything is configured correctly.

## ✅ Backend Configuration

### Environment Variables (server/.env)
```
NODE_ENV=production
PORT=3000
MONGO_URI=<your_production_mongodb_uri>
CORS_ORIGIN=https://yourdomain.com,https://www.yourdomain.com
ACCESS_TOKEN_SECRET=<strong-random-string-min-32-chars>
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_SECRET=<strong-random-string-min-32-chars>
REFRESH_TOKEN_EXPIRY=7d
```

### Security Checks
- [ ] Change `ACCESS_TOKEN_SECRET` to a strong random value
- [ ] Change `REFRESH_TOKEN_SECRET` to a strong random value
- [ ] Update `CORS_ORIGIN` to your production domain
- [ ] Set `NODE_ENV=production`
- [ ] Never commit `.env` file to Git
- [ ] Use `.env.example` to document required variables

### MongoDB Atlas
- [ ] Cluster is running
- [ ] Database user credentials are correct
- [ ] IP address is whitelisted (or 0.0.0.0/0 for testing)
- [ ] DNS SRV lookups are enabled
- [ ] Connection string uses correct database name

### Code Review
- [ ] Error messages don't expose sensitive info
- [ ] Input validation is in place
- [ ] No console.log statements with secrets
- [ ] CORS is restricted to your domain only
- [ ] Cookie flags are secure (httpOnly, secure, sameSite)

---

## ✅ Frontend Configuration

### Environment Variables (client/.env.production)
```
VITE_API_BASE_URL=https://api.yourdomain.com/api/v1
VITE_BACKEND_URL=https://api.yourdomain.com
```

### Build & Testing
- [ ] Run `npm run build` and check for errors
- [ ] Check `dist/` folder is created
- [ ] Run `npm run preview` to test production build locally
- [ ] All API calls work in preview mode

### Security Checks
- [ ] No API keys hardcoded in code
- [ ] No passwords in code
- [ ] Remove/hide test components (ConnectionTest.jsx)
- [ ] Remove console.log statements
- [ ] Test with real backend URLs

### Performance
- [ ] Bundle size is reasonable
- [ ] No unused packages
- [ ] Images are optimized
- [ ] Code splitting is working

---

## ✅ Deployment Services

### Backend Deployment (Choose One)

#### Option 1: Railway.app
1. Connect GitHub repository
2. Add environment variables
3. Select Node.js environment
4. Deploy

#### Option 2: Render.com
1. Create new Web Service
2. Connect GitHub repository
3. Build command: `cd server && npm install`
4. Start command: `cd server && npm start`
5. Add environment variables
6. Deploy

#### Option 3: Heroku
1. Create new app
2. Connect GitHub repository
3. Add environment variables
4. Deploy

#### Option 4: AWS / DigitalOcean / VPS
1. Set up Node.js server
2. Clone repository
3. Install dependencies
4. Set up PM2 for process management
5. Configure nginx as reverse proxy
6. Set up SSL with Let's Encrypt

### Frontend Deployment (Choose One)

#### Option 1: Vercel (Recommended for Vite)
1. Sign up at vercel.com
2. Import project from GitHub
3. Set environment variables
4. Deploy (automatic on push)

#### Option 2: Netlify
1. Sign up at netlify.com
2. Connect GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables
6. Deploy

#### Option 3: AWS S3 + CloudFront
1. Build project: `npm run build`
2. Upload `dist/` to S3 bucket
3. Create CloudFront distribution
4. Point domain to CloudFront

---

## ✅ Domain & SSL

- [ ] Domain registered and DNS configured
- [ ] SSL certificate installed (free from Let's Encrypt)
- [ ] Backend accessible at: `https://api.yourdomain.com`
- [ ] Frontend accessible at: `https://yourdomain.com`
- [ ] Forced HTTPS redirect (no HTTP access)
- [ ] HSTS header configured

---

## ✅ Testing on Production

### API Connectivity Test
```bash
# Test backend health
curl https://api.yourdomain.com/test

# Test login endpoint
curl -X POST https://api.yourdomain.com/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test"}'
```

### Frontend Tests
- [ ] Visit `https://yourdomain.com`
- [ ] Test registration
- [ ] Test login
- [ ] Test cookie storage
- [ ] Test page refresh (user stays logged in)
- [ ] Test all API calls work
- [ ] Test error handling

### Browser Compatibility
- [ ] Works in Chrome
- [ ] Works in Firefox
- [ ] Works in Safari
- [ ] Works in Edge
- [ ] Works on mobile browsers

---

## ✅ Monitoring & Maintenance

### Analytics
- [ ] Set up Google Analytics
- [ ] Set up error tracking (Sentry)
- [ ] Set up performance monitoring

### Logs
- [ ] Backend logs to file
- [ ] Monitor error logs regularly
- [ ] Set up log rotation
- [ ] Archive old logs

### Backups
- [ ] MongoDB automatic backups enabled
- [ ] Test restore process
- [ ] Document backup procedure
- [ ] Keep 30 days of backups minimum

### Updates
- [ ] Update Node.js regularly
- [ ] Update npm packages monthly
- [ ] Update MongoDB version
- [ ] Security patches immediately

---

## ✅ Performance Optimization

### Backend
- [ ] Database indexes created
- [ ] Query optimization done
- [ ] Caching implemented (Redis optional)
- [ ] Compression enabled (gzip)
- [ ] Response times < 200ms

### Frontend
- [ ] Images optimized
- [ ] Code splitting enabled
- [ ] Lazy loading implemented
- [ ] Bundle size < 200KB
- [ ] Lighthouse score > 90

### Network
- [ ] CDN configured (optional)
- [ ] Compression enabled
- [ ] Keep-alive enabled
- [ ] HTTP/2 or HTTP/3

---

## ✅ Security Checklist

### Secrets Management
- [ ] No secrets in Git
- [ ] Use environment variables
- [ ] Rotate secrets monthly
- [ ] Use secret management tool (AWS Secrets Manager, etc.)

### API Security
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] Output escaping done
- [ ] SQL injection prevention (MongoDB injection)
- [ ] XSS protection (httpOnly cookies)
- [ ] CSRF protection (sameSite cookies)

### HTTPS/TLS
- [ ] HTTPS enforced
- [ ] TLS 1.2+ only
- [ ] Strong cipher suites
- [ ] Certificate pinning (optional)

### Authentication
- [ ] JWT expiration set
- [ ] Refresh token rotation
- [ ] Password hashing (bcrypt)
- [ ] No sensitive data in JWT

### Database
- [ ] Encryption at rest
- [ ] Encryption in transit
- [ ] User role-based access control
- [ ] Database firewall enabled

---

## ✅ Documentation

- [ ] README.md updated with deployment instructions
- [ ] API documentation completed
- [ ] Environment variables documented
- [ ] Database schema documented
- [ ] Deployment runbook created
- [ ] Emergency procedures documented

---

## ✅ Team & Communication

- [ ] Team trained on deployment process
- [ ] Incident response plan created
- [ ] On-call schedule established
- [ ] Status page set up
- [ ] Communication channels configured

---

## 📋 Pre-Launch Verification

Run this before going live:

```bash
# Backend
cd server
npm test                    # Run tests
npm run lint                # Check code quality
npm start                   # Test start command

# Frontend
cd client
npm run build               # Production build
npm run preview             # Test production build
```

---

## 🚨 Rollback Plan

If something goes wrong in production:

1. **Immediate:** Revert to previous version
   ```bash
   git revert <commit-hash>
   redeploy
   ```

2. **Quick Fix:** Hotfix branch
   ```bash
   git checkout -b hotfix/issue-name
   # Fix issue
   git push
   # Deploy
   ```

3. **Communication:** Notify users
   - Update status page
   - Send email to users
   - Post on social media

---

## 📞 Support Contacts

- [ ] Add support email: support@yourdomain.com
- [ ] Add issue tracking: GitHub Issues
- [ ] Add chat support: Slack/Discord
- [ ] Add documentation: Wiki/Help Center

---

## ✅ Final Checklist

- [ ] All environment variables set
- [ ] Backend built and tested
- [ ] Frontend built and tested
- [ ] Database backed up
- [ ] SSL certificates installed
- [ ] Domain configured
- [ ] CDN configured
- [ ] Monitoring enabled
- [ ] Backups enabled
- [ ] Documentation updated
- [ ] Team trained
- [ ] Incident plan ready
- [ ] Launch!

---

**Ready to deploy? 🚀**

Once all items are checked, you're ready for production!

---

## 📚 Deployment Resources

- [Railway Documentation](https://docs.railway.app/)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [MongoDB Atlas Documentation](https://docs.mongodb.com/atlas/)
- [Let's Encrypt](https://letsencrypt.org/)

---

**Good luck with your deployment! Remember to monitor closely in the first 24-48 hours.**
