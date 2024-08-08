<template>
  <footer class="footer">
    <div class="container">
      <p>&copy; {{ currentYear }} Raines。保留所有權利。</p>
      <p>
        <a href="#" @click.prevent="showPrivacyPolicy">隱私政策</a> |
        <a href="#terms">使用條款</a> |
        <a href="#contact">聯絡我們</a>
      </p>
    </div>

    <!-- 隱私政策彈出框 -->
    <div v-if="isPrivacyPolicyVisible" class="modal">
      <div class="modal-content">
        <span class="close" @click="hidePrivacyPolicy">&times;</span>
        <h2>隱私政策</h2>
        <div class="policy-content">
          <p>最後更新日期：{{ currentDate }}</p>
          <p>Raines（"我們"、"我們的"或"本公司"）重視並保護您的隱私。本隱私政策說明了我們如何收集、使用、披露和保護您的個人信息。[[1]](#__1)</p>

          <h3>1. 信息收集</h3>
          <p>我們可能收集以下類型的個人信息：</p>
          <ul>
            <li>姓名、電子郵件地址、電話號碼等聯繫信息</li>
            <li>IP地址、瀏覽器類型、操作系統等技術信息</li>
            <li>使用我們服務時的偏好設置和行為數據</li>
          </ul>

          <h3>2. 信息使用</h3>
          <p>我們使用收集的信息來：</p>
          <ul>
            <li>提供、維護和改進我們的服務</li>
            <li>處理交易並發送相關信息</li>
            <li>回應您的評論、問題和請求</li>
            <li>發送有關我們服務的更新、安全警報和支持消息</li>
          </ul>

          <h3>3. 信息共享</h3>
          <p>我們不會出售您的個人信息。我們可能在以下情況下共享您的信息：</p>
          <ul>
            <li>經您同意</li>
            <li>遵守法律要求</li>
            <li>保護我們的權利、財產或安全</li>
          </ul>

          <h3>4. 數據安全</h3>
          <p>我們採取合理的措施來保護您的個人信息免受未經授權的訪問、使用或披露。[[2]](#__2)</p>

          <h3>5. 您的權利</h3>
          <p>您有權訪問、更正或刪除您的個人信息。如需行使這些權利，請聯繫我們。[[3]](#__3)</p>

          <h3>6. 變更</h3>
          <p>我們可能會不時更新本隱私政策。我們將在網站上發布任何更改。[[4]](#__4)</p>

          <h3>7. 聯繫我們</h3>
          <p>如果您對本隱私政策有任何問題，請聯繫我們：[您的聯繫信息]</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PageFooter',
  data() {
    return {
      isPrivacyPolicyVisible: false
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
    currentDate() {
      return new Date().toISOString().split('T')[0];
    }
  },
  methods: {
    showPrivacyPolicy() {
      this.isPrivacyPolicyVisible = true;
    },
    hidePrivacyPolicy() {
      this.isPrivacyPolicyVisible = false;
    }
  }
}
</script>

<style scoped>
.footer {
  background-color: #1A1A1A;
  color: #FFA500;
  padding: 1rem 0;
  text-align: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

a {
  color: #FFA500;
  text-decoration: none;
  margin: 0 0.5rem;
}

a:hover {
  text-decoration: underline;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 700px;
  max-height: 80vh;
  overflow-y: auto;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.policy-content {
  text-align: left;
  color: #333;
}

.policy-content h2, .policy-content h3 {
  color: #1A1A1A;
}

.policy-content ul {
  padding-left: 20px;
}
</style>
