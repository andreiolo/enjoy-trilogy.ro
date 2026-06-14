"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import "./generator.css";
import { generatePosts as generatePostsFromTemplates } from "./templates";
import { type MenuCategory, type MenuItem, loadMenu, saveMenu, resetMenu } from "./menu-data";
import { exportFullMenuPDF } from "./menu-pdf-export";

const ACCESS_PASSWORD = "trilogybox2020";

function getTodayISO() {
  return new Date().toISOString().slice(0, 10);
}
function getTomorrowISO() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

function formatDateParts(dateStr: string) {
  const date = new Date(dateStr + "T12:00:00");
  const weekday = date.toLocaleDateString("ro-RO", { weekday: "long" });
  const day = date.getDate();
  const month = date.toLocaleDateString("ro-RO", { month: "long" });
  const year = date.getFullYear();
  return {
    weekday: weekday.charAt(0).toUpperCase() + weekday.slice(1),
    dayNum: day,
    month: month.charAt(0).toUpperCase() + month.slice(1),
    year,
    dayMonth: `${day} ${month.charAt(0).toUpperCase() + month.slice(1)}`,
  };
}

/* ═══════════════════════════════════════════════════════════
   PNG DESIGN — 1080×1080, photo background, for Facebook
   ═══════════════════════════════════════════════════════════ */
function FlyerPNG({ date, items, note }: { date: string; items: string[]; note: string }) {
  const { weekday, dayMonth } = formatDateParts(date);
  const filtered = items.filter((it) => it.trim() !== "");

  return (
    <div style={{ width: 1080, height: 1080, position: "relative", overflow: "hidden", backgroundColor: "#1a1714" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/trilogy-1.jpg" alt="" style={{
        position: "absolute", top: 0, left: 0, width: 1080, height: 1080,
        objectFit: "cover", filter: "brightness(0.45) saturate(0.85)",
      }} />

      <div style={{ position: "absolute", top: 40, left: 40, right: 40, bottom: 40, border: "1px solid rgba(255,255,255,0.12)" }} />

      <div style={{
        position: "absolute", top: 0, left: 0, width: 1080, height: 1080,
        textAlign: "center",
        paddingTop: 120,
      }}>
        <div style={{
          background: "rgba(245,241,232,0.9)",
          borderRadius: 16, padding: "52px 60px 44px",
          width: 700, margin: "0 auto", boxSizing: "border-box",
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon-192.png" alt="Trilogy" style={{ width: 90, height: 90, objectFit: "contain", display: "block", margin: "0 auto 16px" }} />

          <div style={{
            background: "#5b7a3f", color: "#fff",
            padding: "10px 36px", borderRadius: 4,
            fontSize: 18, letterSpacing: 7, textTransform: "uppercase" as const,
            fontFamily: "var(--font-montserrat), sans-serif", fontWeight: 600,
            display: "inline-block", marginBottom: 24,
          }}>
            Trilogy Box
          </div>

          <p style={{
            fontFamily: "var(--font-playfair), 'Playfair Display', serif",
            fontSize: 52, fontWeight: 400, fontStyle: "italic",
            color: "#1a1714", margin: "0 0 6px 0",
          }}>
            Meniul Zilei
          </p>

          <p style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: 18, fontWeight: 600, letterSpacing: 4,
            color: "#5b7a3f", margin: "0 0 28px 0",
          }}>
            {weekday.toUpperCase()} · {dayMonth.toUpperCase()}
          </p>

          {filtered.map((item, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: 30, fontWeight: 400, color: "#1a1714",
              margin: "0 0 10px 0", lineHeight: 1.5,
            }}>
              {i + 1}. {item}
            </p>
          ))}

          <div style={{ width: 60, height: 1, background: "#5b7a3f", margin: "16px auto" }} />

          {note && (
            <p style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontSize: 22, color: "#888", margin: 0,
            }}>
              {note}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PDF CARD — white background, for delivery boxes (single)
   ═══════════════════════════════════════════════════════════ */
function FlyerPDFCard({ date, items, note }: { date: string; items: string[]; note: string }) {
  const { weekday, dayNum, month, year } = formatDateParts(date);
  const filtered = items.filter((it) => it.trim() !== "");

  return (
    <div style={{
      width: 540, height: 760, background: "#fff",
      boxSizing: "border-box",
      fontFamily: "var(--font-montserrat), 'Montserrat', sans-serif",
      textAlign: "center",
      padding: "24px 38px 20px",
    }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icon-192.png" alt="Trilogy" style={{ width: 190, height: 190, objectFit: "contain", display: "block", margin: "0 auto 8px" }} />

      <h1 style={{
        fontFamily: "var(--font-playfair), 'Playfair Display', serif",
        fontSize: 46, fontWeight: 700, color: "#1a1714",
        margin: "0 0 12px 0", letterSpacing: 3, fontStyle: "italic",
      }}>
        MULȚUMIM!
      </h1>

      <p style={{ fontSize: 15, fontWeight: 500, color: "#1a1714", margin: "0 0 10px 0" }}>
        Mulțumim pentru comanda ta de azi!
      </p>
      <p style={{ fontSize: 13, fontWeight: 300, color: "#1a1714", margin: "0 auto 10px", lineHeight: 1.65, maxWidth: 440 }}>
        Fiecare cutie Trilogy Box e o bucată din pasiunea noastră pentru mâncarea făcută cu grijă.
        Ne bucurăm că ești parte din povestea noastră zilnică.
      </p>
      <p style={{ fontSize: 14, fontWeight: 400, color: "#1a1714", margin: "0 0 16px 0", fontStyle: "italic" }}>
        Mâine te așteptăm cu un alt gust, la fel de bun.
      </p>

      <p style={{ fontSize: 14, fontWeight: 600, color: "#1a1714", margin: "0 0 5px 0" }}>
        Meniul de {weekday}, {dayNum} {month} {year}
      </p>
      {filtered.map((item, i) => (
        <p key={i} style={{ fontSize: 14, color: "#1a1714", margin: "0 0 3px 0", lineHeight: 1.5 }}>
          {i + 1}. {item}
        </p>
      ))}
      {note && <p style={{ fontSize: 13, color: "#1a1714", margin: "5px 0 0 0" }}>{note}</p>}

      <p style={{ fontSize: 13, fontWeight: 600, color: "#1a1714", margin: "14px 0 3px 0" }}>📍 Livrăm:</p>
      <p style={{ fontSize: 13, color: "#333", margin: "0 0 2px 0" }}>în Vulcan | 📞 0728 382 305</p>
      <p style={{ fontSize: 13, color: "#333", margin: 0 }}>în Petroșani | 📞 0728 382 304</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   FORM INPUTS
   ═══════════════════════════════════════════════════════════ */
function MenuForm({
  date, setDate, items, setItems, note, setNote,
}: {
  date: string; setDate: (v: string) => void;
  items: string[]; setItems: (v: string[]) => void;
  note: string; setNote: (v: string) => void;
}) {
  const updateItem = (i: number, v: string) => { const n = [...items]; n[i] = v; setItems(n); };
  const addItem = () => setItems([...items, ""]);
  const removeItem = (i: number) => { if (items.length > 1) setItems(items.filter((_, j) => j !== i)); };

  return (
    <div className="gen-form">
      <div>
        <label className="gen-label">Data</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="gen-input" />
      </div>

      <div>
        <label className="gen-label">Preparate</label>
        {items.map((item, i) => (
          <div key={i} className="gen-item-row">
            <span className="gen-item-num">{i + 1}.</span>
            <input type="text" value={item} onChange={(e) => updateItem(i, e.target.value)}
              placeholder={i === 0 ? "ex: Supă cremă de ciuperci" : i === 1 ? "ex: Penne carbonara" : i === 2 ? "ex: Salată" : "ex: Desert"}
              className="gen-input gen-input-flex"
            />
            {items.length > 1 && (
              <button onClick={() => removeItem(i)} title="Șterge" className="gen-remove-btn">×</button>
            )}
          </div>
        ))}
        <button onClick={addItem} className="gen-add-btn">+ Adaugă preparat</button>
      </div>

      <div>
        <label className="gen-label">Notă (jos)</label>
        <input type="text" value={note} onChange={(e) => setNote(e.target.value)} className="gen-input" />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN PAGE
   ═══════════════════════════════════════════════════════════ */
interface GeneratedPost {
  type: string;
  label: string;
  time: string;
  body: string;
}

export default function MenuGenerator() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState("");
  const [pwError, setPwError] = useState(false);
  const [activeTab, setActiveTab] = useState<"png" | "pdf" | "menu">("png");

  const [pngDate, setPngDate] = useState(getTodayISO());
  const [pngItems, setPngItems] = useState(["", "", "Salată", "Desert"]);
  const [pngNote, setPngNote] = useState("Pâine de casă inclusă");

  const [pdfDate, setPdfDate] = useState(getTomorrowISO());
  const [pdfItems, setPdfItems] = useState(["", "", "Salată", "Desert"]);
  const [pdfNote, setPdfNote] = useState("Pâine de casă inclusă");

  const [busy, setBusy] = useState<string | null>(null);
  const pngRef = useRef<HTMLDivElement>(null);
  const pdfRef = useRef<HTMLDivElement>(null);

  const [posts, setPosts] = useState<GeneratedPost[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [openCats, setOpenCats] = useState<Set<string>>(new Set());
  const [editingItem, setEditingItem] = useState<string | null>(null);
  const [searchMenu, setSearchMenu] = useState("");

  useEffect(() => {
    try { if (sessionStorage.getItem("trilogy_menu_auth") === "1") setAuthed(true); } catch {}
    setMenuData(loadMenu());
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("trilogy_menu_v2");
      if (raw) {
        const d = JSON.parse(raw);
        if (d.pngItems) setPngItems(d.pngItems);
        if (d.pngNote !== undefined) setPngNote(d.pngNote);
        if (d.pdfItems) setPdfItems(d.pdfItems);
        if (d.pdfNote !== undefined) setPdfNote(d.pdfNote);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (!authed) return;
    try {
      localStorage.setItem("trilogy_menu_v2", JSON.stringify({ pngItems, pngNote, pdfItems, pdfNote }));
    } catch {}
  }, [pngItems, pngNote, pdfItems, pdfNote, authed]);

  const updateMenu = useCallback((updated: MenuCategory[]) => {
    setMenuData(updated);
    saveMenu(updated);
  }, []);

  const toggleCat = (catId: string) => {
    setOpenCats((prev) => {
      const next = new Set(prev);
      next.has(catId) ? next.delete(catId) : next.add(catId);
      return next;
    });
  };

  const updateItem = useCallback((catId: string, itemId: string, field: keyof MenuItem, value: string | number) => {
    const updated = menuData.map((cat) =>
      cat.id === catId
        ? { ...cat, items: cat.items.map((it) => (it.id === itemId ? { ...it, [field]: value } : it)) }
        : cat
    );
    updateMenu(updated);
  }, [menuData, updateMenu]);

  const deleteItem = useCallback((catId: string, itemId: string) => {
    const updated = menuData.map((cat) =>
      cat.id === catId ? { ...cat, items: cat.items.filter((it) => it.id !== itemId) } : cat
    );
    updateMenu(updated);
  }, [menuData, updateMenu]);

  const addItem = useCallback((catId: string) => {
    const newItem: MenuItem = {
      id: `item_new_${Date.now()}`,
      name: "Produs nou",
      weight: "200g",
      price: 0,
      ingredients: "",
    };
    const updated = menuData.map((cat) =>
      cat.id === catId ? { ...cat, items: [...cat.items, newItem] } : cat
    );
    updateMenu(updated);
    setEditingItem(newItem.id);
  }, [menuData, updateMenu]);

  const handleResetMenu = () => {
    if (confirm("Sigur vrei să resetezi meniul la versiunea originală? Toate modificările vor fi pierdute.")) {
      setMenuData(resetMenu());
    }
  };

  const generatePosts = () => {
    const { weekday } = formatDateParts(pngDate);
    const result = generatePostsFromTemplates(pngDate, pngItems, pngNote, weekday);
    setPosts(result);
  };

  const copyPost = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    }
  };

  const handleLogin = () => {
    if (pw === ACCESS_PASSWORD) {
      setAuthed(true);
      setPwError(false);
      try { sessionStorage.setItem("trilogy_menu_auth", "1"); } catch {}
    } else {
      setPwError(true);
    }
  };

  const exportPNG = async () => {
    setBusy("png");
    try {
      const { toPng } = await import("html-to-image");
      await document.fonts.ready;
      const dataUrl = await toPng(pngRef.current!, { width: 1080, height: 1080, pixelRatio: 2, cacheBust: true });
      const a = document.createElement("a");
      a.download = `meniu_${pngDate}.png`;
      a.href = dataUrl;
      a.click();
    } catch (e) {
      console.error("PNG export failed:", e);
      alert("Eroare la export PNG. Încearcă din nou.");
    } finally {
      setBusy(null);
    }
  };

  const exportFullMenu = async () => {
    setBusy("menu-pdf");
    try {
      await exportFullMenuPDF(menuData);
    } catch (e) {
      console.error("Full menu PDF export failed:", e);
      alert("Eroare la export. Încearcă din nou.");
    } finally {
      setBusy(null);
    }
  };

  const exportPDF = async () => {
    setBusy("pdf");
    try {
      const { toPng } = await import("html-to-image");
      const jspdfModule = await import("jspdf");
      const jsPDF = jspdfModule.jsPDF || jspdfModule.default;
      await document.fonts.ready;
      const dataUrl = await toPng(pdfRef.current!, { width: 540, height: 760, pixelRatio: 3, cacheBust: true });

      const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 5;
      const cardW = (pageW - 2 * margin) / 2;
      const cardH = (pageH - 2 * margin) / 2;
      const pos: [number, number][] = [
        [margin, margin], [margin + cardW, margin],
        [margin, margin + cardH], [margin + cardW, margin + cardH],
      ];
      for (const [x, y] of pos) pdf.addImage(dataUrl, "PNG", x, y, cardW, cardH, undefined, "FAST");
      pdf.save(`meniu_cutii_${pdfDate}.pdf`);
    } catch (e) {
      console.error("PDF export failed:", e);
      alert("Eroare la export PDF. Încearcă din nou.");
    } finally {
      setBusy(null);
    }
  };

  if (!authed) {
    return (
      <div className="gen-login-wrap">
        <div className="gen-login-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon-192.png" alt="Trilogy" style={{ width: 64, height: 64, margin: "0 auto 16px" }} />
          <h1 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4, color: "#1a1714" }}>Trilogy — Generator Meniu</h1>
          <p style={{ fontSize: 13, color: "#999", marginBottom: 24 }}>Introdu parola pentru acces</p>
          <input type="password" value={pw}
            onChange={(e) => { setPw(e.target.value); setPwError(false); }}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Parolă"
            className="gen-input"
            style={{ border: pwError ? "1.5px solid #c44" : undefined, marginBottom: 12 }}
            autoFocus
          />
          {pwError && <p style={{ color: "#c44", fontSize: 13, marginBottom: 8 }}>Parolă incorectă</p>}
          <button onClick={handleLogin} className="gen-dl-btn gen-dl-btn-green" style={{ width: "100%" }}>Intră</button>
        </div>
      </div>
    );
  }

  return (
    <div className="gen-page">
      {/* Header */}
      <header className="gen-header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icon-192.png" alt="" style={{ width: 32, height: 32 }} />
        <h1 className="gen-header-title">Trilogy — Generator Meniu</h1>
      </header>

      {/* Tabs */}
      <div className="gen-tabs">
        <button className={`gen-tab ${activeTab === "png" ? "gen-tab-active" : ""}`} onClick={() => setActiveTab("png")}>
          📸 Postare Facebook
        </button>
        <button className={`gen-tab ${activeTab === "pdf" ? "gen-tab-active" : ""}`} onClick={() => setActiveTab("pdf")}>
          🖨️ Flyer Cutii
        </button>
        {/* <button className={`gen-tab ${activeTab === "menu" ? "gen-tab-active" : ""}`} onClick={() => setActiveTab("menu")}>
          📋 Editare Meniu
        </button> */}
      </div>

      {/* Content */}
      <div className="gen-content">

        {/* ═══ PNG TAB ═══ */}
        {activeTab === "png" && (
          <div className="gen-section">
            <p className="gen-section-desc">PNG 1080×1080 — meniul de azi, se postează pe Facebook/Instagram</p>

            <MenuForm date={pngDate} setDate={setPngDate} items={pngItems} setItems={setPngItems} note={pngNote} setNote={setPngNote} />

            <button onClick={exportPNG} disabled={!!busy} className="gen-dl-btn gen-dl-btn-green" style={{ opacity: busy ? 0.6 : 1 }}>
              {busy === "png" ? "Se generează..." : "📸  Descarcă PNG"}
            </button>

            <div className="gen-preview">
              <p className="gen-preview-label">Previzualizare</p>
              <div className="gen-preview-png-wrap">
                <div>
                  <div ref={pngRef}>
                    <FlyerPNG date={pngDate} items={pngItems} note={pngNote} />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Postări Facebook ── */}
            <div className="gen-posts-section">
              <h2 className="gen-posts-title">✍️ Postări Facebook</h2>
              <p className="gen-section-desc">Generează 5 variante de text pentru postarea de pe Facebook, gata de copy-paste</p>

              <button
                onClick={generatePosts}
                className="gen-dl-btn gen-dl-btn-blue"
              >
                ✨ Generează 5 variante de postare
              </button>

              {posts.length > 0 && (
                <div className="gen-posts-list">
                  {posts.map((post, i) => (
                    <div key={i} className="gen-post-card">
                      <div className="gen-post-header">
                        <span className="gen-post-badge">{post.label || `Varianta ${i + 1}`}</span>
                        <span className="gen-post-time">🕐 {post.time}</span>
                      </div>
                      <pre className="gen-post-body">{post.body}</pre>
                      <button
                        onClick={() => copyPost(post.body, i)}
                        className={`gen-copy-btn ${copiedIdx === i ? "gen-copy-btn-done" : ""}`}
                      >
                        {copiedIdx === i ? "✅ Copiat!" : "📋 Copiază"}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══ PDF TAB ═══ */}
        {activeTab === "pdf" && (
          <div className="gen-section">
            <p className="gen-section-desc">PDF cu 4 bucăți pe A4 — meniul de mâine, se pune în cutiile de azi</p>

            <MenuForm date={pdfDate} setDate={setPdfDate} items={pdfItems} setItems={setPdfItems} note={pdfNote} setNote={setPdfNote} />

            <button onClick={exportPDF} disabled={!!busy} className="gen-dl-btn gen-dl-btn-dark" style={{ opacity: busy ? 0.6 : 1 }}>
              {busy === "pdf" ? "Se generează..." : "🖨️  Descarcă PDF (4× A4)"}
            </button>

            <div className="gen-preview">
              <p className="gen-preview-label">Previzualizare</p>
              <div className="gen-preview-pdf-wrap">
                <div>
                  <div ref={pdfRef}>
                    <FlyerPDFCard date={pdfDate} items={pdfItems} note={pdfNote} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══ MENU TAB ═══ */}
        {activeTab === "menu" && (
          <div className="gen-section">
            <p className="gen-section-desc">Editează meniul restaurantului — modifică produse, prețuri, ingrediente</p>

            <div className="menu-toolbar">
              <input
                type="text"
                value={searchMenu}
                onChange={(e) => setSearchMenu(e.target.value)}
                placeholder="🔍 Caută produs..."
                className="gen-input menu-search"
              />
              <button onClick={handleResetMenu} className="menu-reset-btn">
                ↺ Resetează meniul
              </button>
            </div>

            <div className="menu-stats">
              {menuData.reduce((sum, cat) => sum + cat.items.length, 0)} produse în {menuData.length} categorii
            </div>

            <button onClick={exportFullMenu} disabled={!!busy} className="gen-dl-btn gen-dl-btn-dark" style={{ opacity: busy ? 0.6 : 1, marginBottom: 24 }}>
              {busy === "menu-pdf" ? "Se generează..." : "📄  Descarcă Meniu PDF"}
            </button>

            <div className="menu-categories">
              {menuData.map((cat) => {
                const filtered = searchMenu
                  ? cat.items.filter(
                      (it) =>
                        it.name.toLowerCase().includes(searchMenu.toLowerCase()) ||
                        it.ingredients.toLowerCase().includes(searchMenu.toLowerCase())
                    )
                  : cat.items;
                if (searchMenu && filtered.length === 0) return null;
                const isOpen = openCats.has(cat.id) || !!searchMenu;

                return (
                  <div key={cat.id} className="menu-cat">
                    <button className="menu-cat-header" onClick={() => toggleCat(cat.id)}>
                      <div>
                        <span className="menu-cat-name">{cat.name}</span>
                        <span className="menu-cat-count">{filtered.length} produse</span>
                      </div>
                      <span className={`menu-cat-arrow ${isOpen ? "menu-cat-arrow-open" : ""}`}>▸</span>
                    </button>

                    {isOpen && (
                      <div className="menu-cat-items">
                        {filtered.map((item) => (
                          <div key={item.id} className="menu-item">
                            {editingItem === item.id ? (
                              <div className="menu-item-edit">
                                <div className="menu-item-edit-row">
                                  <input
                                    type="text"
                                    value={item.name}
                                    onChange={(e) => updateItem(cat.id, item.id, "name", e.target.value)}
                                    className="gen-input menu-edit-name"
                                    placeholder="Nume produs"
                                  />
                                  <input
                                    type="text"
                                    value={item.weight}
                                    onChange={(e) => updateItem(cat.id, item.id, "weight", e.target.value)}
                                    className="gen-input menu-edit-weight"
                                    placeholder="Gramaj"
                                  />
                                  <div className="menu-edit-price-wrap">
                                    <input
                                      type="number"
                                      value={item.price}
                                      onChange={(e) => updateItem(cat.id, item.id, "price", Number(e.target.value))}
                                      className="gen-input menu-edit-price"
                                    />
                                    <span className="menu-edit-lei">lei</span>
                                  </div>
                                </div>
                                <textarea
                                  value={item.ingredients}
                                  onChange={(e) => updateItem(cat.id, item.id, "ingredients", e.target.value)}
                                  className="gen-input menu-edit-ingredients"
                                  placeholder="Ingrediente"
                                  rows={3}
                                />
                                <div className="menu-item-actions">
                                  <button onClick={() => setEditingItem(null)} className="menu-btn menu-btn-done">
                                    ✓ Gata
                                  </button>
                                  <button onClick={() => deleteItem(cat.id, item.id)} className="menu-btn menu-btn-delete">
                                    🗑 Șterge
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="menu-item-view" onClick={() => setEditingItem(item.id)}>
                                <div className="menu-item-top">
                                  <span className="menu-item-name">{item.name}</span>
                                  <span className="menu-item-price">{item.price} lei</span>
                                </div>
                                <div className="menu-item-meta">
                                  <span className="menu-item-weight">{item.weight}</span>
                                  {item.tags?.map((t) => (
                                    <span key={t} className={`menu-tag menu-tag-${t}`}>
                                      {t === "vegetarian" ? "🌿" : t === "copii" ? "🧸" : t === "bucătar" ? "🏅" : t === "sezon" ? "📅" : ""} {t}
                                    </span>
                                  ))}
                                </div>
                                <p className="menu-item-ingredients">{item.ingredients}</p>
                              </div>
                            )}
                          </div>
                        ))}
                        <button onClick={() => addItem(cat.id)} className="menu-add-btn">
                          + Adaugă produs
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
